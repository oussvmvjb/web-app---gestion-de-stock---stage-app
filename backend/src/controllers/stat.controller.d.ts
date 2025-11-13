import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Stat } from '../models';
import { StatRepository } from '../repositories';
export declare class StatController {
    statRepository: StatRepository;
    constructor(statRepository: StatRepository);
    create(stat: Omit<Stat, 'sn'>): Promise<Stat>;
    count(where?: Where<Stat>): Promise<Count>;
    find(filter?: Filter<Stat>): Promise<Stat[]>;
    updateAll(stat: Stat, where?: Where<Stat>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Stat>): Promise<Stat>;
    updateById(id: string, stat: Stat): Promise<void>;
    replaceById(id: string, stat: Stat): Promise<void>;
    deleteById(id: string): Promise<void>;
}
