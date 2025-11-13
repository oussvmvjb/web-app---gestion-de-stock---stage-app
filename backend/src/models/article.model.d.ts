import { Entity } from '@loopback/repository';
import { Stat } from './stat.model';
export declare class Article extends Entity {
    sn: string;
    nomarticle: string;
    model: string;
    description?: string;
    quantity: string;
    emplacement: string;
    stat: Stat;
    constructor(data?: Partial<Article>);
}
export interface ArticleRelations {
}
export type ArticleWithRelations = Article & ArticleRelations;
