import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {BdetudDataSource} from '../datasources';
import {Article, ArticleRelations, Stat} from '../models';
import {StatRepository} from './stat.repository';

export class ArticleRepository extends DefaultCrudRepository<
  Article,
  typeof Article.prototype.sn,
  ArticleRelations
> {

  public readonly stat: HasOneRepositoryFactory<Stat, typeof Article.prototype.sn>;

  constructor(
    @inject('datasources.bdetud') dataSource: BdetudDataSource, @repository.getter('StatRepository') protected statRepositoryGetter: Getter<StatRepository>,
  ) {
    super(Article, dataSource);
    this.stat = this.createHasOneRepositoryFactoryFor('stat', statRepositoryGetter);
    this.registerInclusionResolver('stat', this.stat.inclusionResolver);
  }
}
