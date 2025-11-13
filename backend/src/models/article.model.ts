import {Entity, model, property, hasOne} from '@loopback/repository';
import {Stat} from './stat.model';

@model()
export class Article extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
    length:50,
  })
  sn: string;

  @property({
    type: 'string',
    required: true,
    length:50,
  })
  nomarticle: string;

  @property({
    type: 'string',
    required: true,
    length:50,
  })
  model: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
    length:50,
  })
  statu: string;

  @property({
    type: 'date',  // Changer 'string' en 'date'
    required: true,
  })
  regesdate: string;


  @property({
    type: 'string',
    required: true,
  })
  emplacement: string;

  @hasOne(() => Stat)
  stat: Stat;

  constructor(data?: Partial<Article>) {
    super(data);
  }
}

export interface ArticleRelations {
  // describe navigational properties here
}

export type ArticleWithRelations = Article & ArticleRelations;
