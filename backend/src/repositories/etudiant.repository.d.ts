import { DefaultCrudRepository } from '@loopback/repository';
import { BdetudDataSource } from '../datasources';
import { Etudiant, EtudiantRelations } from '../models';
export declare class EtudiantRepository extends DefaultCrudRepository<Etudiant, typeof Etudiant.prototype.cin, EtudiantRelations> {
    constructor(dataSource: BdetudDataSource);
}
