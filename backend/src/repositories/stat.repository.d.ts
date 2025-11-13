import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { BdetudDataSource } from '../datasources';
import { Stat, StatRelations, Article } from '../models';
import { ArticleRepository } from './article.repository';
export declare class StatRepository extends DefaultCrudRepository<Stat, typeof Stat.prototype.sn, StatRelations> {
    protected articleRepositoryGetter: Getter<ArticleRepository>;
    readonly article: BelongsToAccessor<Article, typeof Stat.prototype.sn>;
    constructor(dataSource: BdetudDataSource, articleRepositoryGetter: Getter<ArticleRepository>);
}
