import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Etudiant } from '../models';
import { EtudiantRepository } from '../repositories';
export declare class EtudiantController {
    etudiantRepository: EtudiantRepository;
    constructor(etudiantRepository: EtudiantRepository);
    create(etudiant: Etudiant): Promise<Etudiant>;
    count(where?: Where<Etudiant>): Promise<Count>;
    find(filter?: Filter<Etudiant>): Promise<Etudiant[]>;
    updateAll(etudiant: Etudiant, where?: Where<Etudiant>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Etudiant>): Promise<Etudiant>;
    updateById(id: string, etudiant: Etudiant): Promise<void>;
    replaceById(id: string, etudiant: Etudiant): Promise<void>;
    deleteById(id: string): Promise<void>;
}
