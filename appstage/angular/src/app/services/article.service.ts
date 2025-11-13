import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
apiUrl ="http://127.0.0.1:3000/article";
  suppriner: any;
  http: any;
constructor(public httpclient : HttpClient){}
getTousarticle()
{
return this.httpclient.get<Article[]>(this.apiUrl);
}
getarticle(id:string)
{
return this.httpclient.get<Article>(this.apiUrl+"/"+id);
}
supprimerarticle(id:string)
{
return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
}
modifierarticle(sn: string, a: Article)
{
  const url = `${this.apiUrl}/${sn}`;
  return this.httpclient.put<Article>(url, a);
}
ajoutarticle (a: Article)
{
return this.httpclient.post<any>(this.apiUrl, a);
}
getStatistiquesParEmplacement() {
  return this.httpclient.get<{ emplacement: string, enPanne: number, enStock: number, enReparation: number, rebut: number }[]>(this.apiUrl + "/stat");
}


updateArticleStatus(id: string, statu: string) {
  const url = `${this.apiUrl}/${id}`;
  return this.httpclient.patch<any>(url, { statu });
}

}
