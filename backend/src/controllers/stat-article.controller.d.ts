import { Article } from '../models';
import { StatRepository } from '../repositories';
export declare class StatArticleController {
    statRepository: StatRepository;
    constructor(statRepository: StatRepository);
    getArticle(id: string): Promise<Article>;
}
