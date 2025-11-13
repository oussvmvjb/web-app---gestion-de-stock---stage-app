import { Entity } from '@loopback/repository';
export declare class Etudiant extends Entity {
    cin: string;
    nom: string;
    prenom: string;
    email: string;
    clas: string;
    psw: string;
    constructor(data?: Partial<Etudiant>);
}
export interface EtudiantRelations {
}
export type EtudiantWithRelations = Etudiant & EtudiantRelations;
