export class Stat {
    emplacement: string;
    enPanne: number;
    enStock: number;
    enReparation: number;
    rebut: number;
  
    constructor(emplacement: string, enPanne: number, enStock: number, enReparation: number, rebut: number) {
      this.emplacement = emplacement;
      this.enPanne = enPanne;
      this.enStock = enStock;
      this.enReparation = enReparation;
      this.rebut = rebut;
    }
  }
  