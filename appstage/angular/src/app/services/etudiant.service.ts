import {Injectable } from '@angular/core';
import {Etudiant} from './../models/etudiant';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class etudiantService {
apiUrl ="http://127.0.0.1:3000/etudiant";
  suppriner: any;
  http: any;
constructor(public httpclient : HttpClient){}
getTousetudiant()
{
return this.httpclient.get<Etudiant[]>(this.apiUrl);
}
getetudiant(id:string)
{
return this.httpclient.get<Etudiant>(this.apiUrl+"/"+id);
}
supprimeretudiant(id:string)
{
return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
}
modifieretudiant(cin: string, e: Etudiant)
{
  const url = `${this.apiUrl}/${cin}`;
  return this.httpclient.put<Etudiant>(url, e);
}
ajoutetudiant (e: Etudiant)
{
return this.httpclient.post<any>(this.apiUrl, e);
}}