import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdetudDataSource} from '../datasources';
import {Etudiant, EtudiantRelations} from '../models';

export class EtudiantRepository extends DefaultCrudRepository<
  Etudiant,
  typeof Etudiant.prototype.cin,
  EtudiantRelations
> {
  constructor(
    @inject('datasources.bdetud') dataSource: BdetudDataSource,
  ) {
    super(Etudiant, dataSource);
  }
}
