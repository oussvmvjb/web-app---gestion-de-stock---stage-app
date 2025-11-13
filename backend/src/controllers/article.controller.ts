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
  HttpErrors,
} from '@loopback/rest';
import {Article} from '../models';
import {ArticleRepository} from '../repositories';

export class ArticleController {
  constructor(
    @repository(ArticleRepository)
    public articleRepository : ArticleRepository,
  ) {}
  @get('/article/stat', {
    responses: {
      '200': {
        description: 'Statistiques des articles par emplacement et nom',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  emplacement: { type: 'string' },
                  nomarticle: { type: 'string' },
                  enPanne: { type: 'number' },
                  enStock: { type: 'number' },
                  enReparation: { type: 'number' },
                  rebut: { type: 'number' }
                }
              }
            }
          }
        }
      }
    }
  })
  async getStatsByEmplacement(): Promise<any> {
    const stats = await this.articleRepository.dataSource.execute(`
      SELECT
        emplacement,
        SUM(CASE WHEN statu = 'En Panne' THEN 1 ELSE 0 END) AS enPanne,
        SUM(CASE WHEN statu = 'En Stock' THEN 1 ELSE 0 END) AS enStock,
        SUM(CASE WHEN statu = 'En Réparation' THEN 1 ELSE 0 END) AS enReparation,
        SUM(CASE WHEN statu = 'Rebut' THEN 1 ELSE 0 END) AS rebut
      FROM article
      GROUP BY emplacement;
    `);
    return stats;
  }


  @post('/article', {
    responses: {
      '200': {
        description: 'Article model instance',
        content: {'application/json': {schema: getModelSchemaRef(Article)}},
      },
    },
  })

  @response(200, {
    description: 'Article model instance',
    content: {'application/json': {schema: getModelSchemaRef(Article)}},
  })
  async create(@requestBody() article: Article): Promise<Article> {
    // Check if an article with the given serial number already exists
    const existingArticle = await this.articleRepository.findOne({
      where: {sn: article.sn}, // Ensure `serialNumber` is unique
    });

    if (existingArticle) {
      throw new HttpErrors.BadRequest('An article with this serial number already exists');
    }

    // Save the article if the serial number does not exist
    return this.articleRepository.create(article);
  }


  @get('/article/count')
  @response(200, {
    description: 'Article model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Article) where?: Where<Article>,
  ): Promise<Count> {
    return this.articleRepository.count(where);
  }

  @get('/article')
  @response(200, {
    description: 'Array of Article model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Article, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Article) filter?: Filter<Article>,
  ): Promise<Article[]> {
    return this.articleRepository.find(filter);
  }

  @patch('/article')
  @response(200, {
    description: 'Article PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Article, {partial: true}),
        },
      },
    })
    article: Article,
    @param.where(Article) where?: Where<Article>,
  ): Promise<Count> {
    return this.articleRepository.updateAll(article, where);
  }

  @get('/article/{id}')
  @response(200, {
    description: 'Article model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Article, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Article, {exclude: 'where'}) filter?: FilterExcludingWhere<Article>
  ): Promise<Article> {
    return this.articleRepository.findById(id, filter);
  }

  @patch('/article/{id}')
  @response(204, {
    description: 'Article PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Article, {partial: true}),
        },
      },
    })
    article: Article,
  ): Promise<void> {
    await this.articleRepository.updateById(id, article);
  }

  @put('/article/{id}')
  @response(204, {
    description: 'Article PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() article: Article,
  ): Promise<void> {
    await this.articleRepository.replaceById(id, article);
  }

  @del('/article/{id}')
  @response(204, {
    description: 'Article DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.articleRepository.deleteById(id);
  }
}
