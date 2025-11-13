import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Article} from './article.model';

@model()
export class Stat extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
    length: 50,  // طول الـ sn مهم هنا
  })
  sn: string;

  @property({
    type: 'string',
    length: 50,  // القيمة الافتراضية
  })
  onstock?: string;

  @property({
    type: 'string',
    length: 50,  // القيمة الافتراضية
  })
  onpanne?: string;

  @property({
    type: 'string',
    length: 50,  // القيمة الافتراضية
  })
  enreparation?: number;

  @property({
    type: 'string',
    length: 50,  // القيمة الافتراضية
  })
  rebut?: number;

  @belongsTo(() => Article)
  articleId: string;  // تأكد من أن هذا يتوافق مع المفتاح الأساسي للمقال

  constructor(data?: Partial<Stat>) {
    super(data);
  }
}


export interface StatRelations {
  // describe navigational properties here
}

export type StatWithRelations = Stat & StatRelations;
