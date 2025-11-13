import {Entity, model, property} from '@loopback/repository';

@model()
export class Etudiant extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
    length:50,
  })
  cin: string;

  @property({
    type: 'string',
    required: true,
    length:50,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
    length:50,
  })
  prenom: string;

  @property({
    type: 'string',
    required: true,
    length:50,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    length:50,
  })
  clas: string;

  @property({
    type: 'string',
    required: true,
    length:50,
  })
  psw: string;


  constructor(data?: Partial<Etudiant>) {
    super(data);
  }
}

export interface EtudiantRelations {
  // describe navigational properties here
}

export type EtudiantWithRelations = Etudiant & EtudiantRelations;
