import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {BdetudDataSource} from '../datasources';
import {Stat, StatRelations, Article} from '../models';
import {ArticleRepository} from './article.repository';

export class StatRepository extends DefaultCrudRepository<
  Stat,
  typeof Stat.prototype.sn,
  StatRelations
> {

  public readonly article: BelongsToAccessor<Article, typeof Stat.prototype.sn>;

  constructor(
    @inject('datasources.bdetud') dataSource: BdetudDataSource, @repository.getter('ArticleRepository') protected articleRepositoryGetter: Getter<ArticleRepository>,
  ) {
    super(Stat, dataSource);
    this.article = this.createBelongsToAccessorFor('article', articleRepositoryGetter,);
    this.registerInclusionResolver('article', this.article.inclusionResolver);
  }
}
