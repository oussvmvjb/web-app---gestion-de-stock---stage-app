import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Article,
  Stat,
} from '../models';
import {ArticleRepository} from '../repositories';

export class ArticleStatController {
  constructor(
    @repository(ArticleRepository) protected articleRepository: ArticleRepository,
  ) { }

  @get('/articles/{id}/stat', {
    responses: {
      '200': {
        description: 'Article has one Stat',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Stat),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Stat>,
  ): Promise<Stat> {
    return this.articleRepository.stat(id).get(filter);
  }

  @post('/articles/{id}/stat', {
    responses: {
      '200': {
        description: 'Article model instance',
        content: {'application/json': {schema: getModelSchemaRef(Stat)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Article.prototype.sn,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Stat, {
            title: 'NewStatInArticle',
            exclude: ['sn'],
            optional: ['articleId']
          }),
        },
      },
    }) stat: Omit<Stat, 'sn'>,
  ): Promise<Stat> {
    return this.articleRepository.stat(id).create(stat);
  }

  @patch('/articles/{id}/stat', {
    responses: {
      '200': {
        description: 'Article.Stat PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Stat, {partial: true}),
        },
      },
    })
    stat: Partial<Stat>,
    @param.query.object('where', getWhereSchemaFor(Stat)) where?: Where<Stat>,
  ): Promise<Count> {
    return this.articleRepository.stat(id).patch(stat, where);
  }

  @del('/articles/{id}/stat', {
    responses: {
      '200': {
        description: 'Article.Stat DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Stat)) where?: Where<Stat>,
  ): Promise<Count> {
    return this.articleRepository.stat(id).delete(where);
  }
}
