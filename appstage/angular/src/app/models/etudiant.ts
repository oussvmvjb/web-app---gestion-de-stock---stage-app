export class Etudiant {
    public cin!: string;
    public nom: string;
    public prenom: string;
    public email: string;
    public clas: string;
    public psw: string;
    constructor(cin: string,nom: string,prenom: string,email :string,clas: string,psw: string) {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.clas = clas;
        this.psw=psw; 
        
    }
}

