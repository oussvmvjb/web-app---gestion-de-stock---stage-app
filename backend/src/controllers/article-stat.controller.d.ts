import { Count, Filter, Where } from '@loopback/repository';
import { Article, Stat } from '../models';
import { ArticleRepository } from '../repositories';
export declare class ArticleStatController {
    protected articleRepository: ArticleRepository;
    constructor(articleRepository: ArticleRepository);
    get(id: string, filter?: Filter<Stat>): Promise<Stat>;
    create(id: typeof Article.prototype.sn, stat: Omit<Stat, 'sn'>): Promise<Stat>;
    patch(id: string, stat: Partial<Stat>, where?: Where<Stat>): Promise<Count>;
    delete(id: string, where?: Where<Stat>): Promise<Count>;
}
