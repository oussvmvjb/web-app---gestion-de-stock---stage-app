import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Stat} from '../models';
import {StatRepository} from '../repositories';
import {HttpErrors} from '@loopback/rest';

export class StatController {
  constructor(
    @repository(StatRepository)
    public statRepository : StatRepository,
  ) {}

  @post('/stat', {
    responses: {
      '200': {
        description: 'Stat model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Stat) } },
      },
      '400': {
        description: 'Bad Request - Stat already exists',
        content: { 'application/json': { schema: { type: 'string' } } },
      },
    },
  })
  async create(@requestBody() stat: Stat): Promise<Stat> {
    // Check if a Stat with the given serial number already exists
    const existingStat = await this.statRepository.findOne({
      where: { sn: stat.sn }, // Ensure `serialNumber` is unique
    });

    if (existingStat) {
      throw new HttpErrors.BadRequest('A Stat with this serial number already exists');
    }

    // Save the Stat if the serial number does not exist
    return this.statRepository.create(stat);
  }





  @get('/stat/count')
  @response(200, {
    description: 'Stat model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Stat) where?: Where<Stat>,
  ): Promise<Count> {
    return this.statRepository.count(where);
  }

  @get('/stat')
  @response(200, {
    description: 'Array of Stat model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Stat, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Stat) filter?: Filter<Stat>,
  ): Promise<Stat[]> {
    return this.statRepository.find(filter);
  }

  @patch('/stat')
  @response(200, {
    description: 'Stat PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Stat, {partial: true}),
        },
      },
    })
    stat: Stat,
    @param.where(Stat) where?: Where<Stat>,
  ): Promise<Count> {
    return this.statRepository.updateAll(stat, where);
  }

  @get('/stat/{id}')
  @response(200, {
    description: 'Stat model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Stat, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Stat, {exclude: 'where'}) filter?: FilterExcludingWhere<Stat>
  ): Promise<Stat> {
    return this.statRepository.findById(id, filter);
  }

  @patch('/stat/{id}')
  @response(204, {
    description: 'Stat PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Stat, {partial: true}),
        },
      },
    })
    stat: Stat,
  ): Promise<void> {
    await this.statRepository.updateById(id, stat);
  }

  @put('/stat/{sn}')  // Use sn as the parameter instead of id
  @response(204, {
    description: 'Stat PUT success',
  })
  async updateStatBySn(
    @param.path.string('sn') sn: string,  // sn will now be the unique identifier
    @requestBody() stat: Stat,
  ): Promise<void> {
    try {
      // Find existing stat by sn
      const existingStat = await this.statRepository.findOne({
        where: { sn },  // Use sn to find the stat
      });

      if (!existingStat) {
        throw new HttpErrors.NotFound(`Stat with sn ${sn} not found.`);  // If stat doesn't exist, throw 404
      }

      // Update the stat if it exists
      await this.statRepository.replaceById(existingStat.sn, stat);  // Replace the stat by its id
    } catch (error) {
      console.error('Error updating stat:', error);
      // Throw internal server error if something goes wrong
      throw new HttpErrors.InternalServerError('Unable to update stat');
    }
  }


  @del('/stat/{id}')
  @response(204, {
    description: 'Stat DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.statRepository.deleteById(id);
  }
}
