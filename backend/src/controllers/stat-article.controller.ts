import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Stat,
  Article,
} from '../models';
import {StatRepository} from '../repositories';

export class StatArticleController {
  constructor(
    @repository(StatRepository)
    public statRepository: StatRepository,
  ) { }

  @get('/stat/{id}/article', {
    responses: {
      '200': {
        description: 'Article belonging to Stat',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Article),
          },
        },
      },
    },
  })
  async getArticle(
    @param.path.string('id') id: typeof Stat.prototype.sn,
  ): Promise<Article> {
    const stat = await this.statRepository.findById(id);
    const articleId = stat.articleId;
    return this.statRepository.article(articleId);
  }
}
