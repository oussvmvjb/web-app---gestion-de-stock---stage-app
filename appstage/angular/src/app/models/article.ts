export class Article {
    public sn!: string;
    public nomarticle: string;
    public model: string;
    public description: string;
    public emplacement: string;
    public statu: string;    
    public regesdate: Date; 
  
    constructor(
      sn: string,
      nomarticle: string,
      model: string,
      description: string,
      emplacement: string,
      statu: string,
      regesdate: Date
    ) {
      this.sn = sn;
      this.nomarticle = nomarticle;
      this.model = model;
      this.description = description;
      this.emplacement = emplacement;
      this.statu = statu;
      this.regesdate = regesdate;
    }
  }
  