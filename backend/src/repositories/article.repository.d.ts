import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { BdetudDataSource } from '../datasources';
import { Article, ArticleRelations, Stat } from '../models';
import { StatRepository } from './stat.repository';
export declare class ArticleRepository extends DefaultCrudRepository<Article, typeof Article.prototype.sn, ArticleRelations> {
    protected statRepositoryGetter: Getter<StatRepository>;
    readonly stat: HasOneRepositoryFactory<Stat, typeof Article.prototype.sn>;
    constructor(dataSource: BdetudDataSource, statRepositoryGetter: Getter<StatRepository>);
}
