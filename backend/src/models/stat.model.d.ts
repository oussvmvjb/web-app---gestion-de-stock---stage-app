import { Entity } from '@loopback/repository';
import { Article } from './article.model';
export declare class Stat extends Entity {
    sn: string;
    onstock?: number;
    onpanne?: number;
    enreparation?: number;
    rebut?: number;
    article: Article;
    constructor(data?: Partial<Stat>);
}
export interface StatRelations {
}
export type StatWithRelations = Stat & StatRelations;
