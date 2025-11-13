import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stat } from '../models/stat';  // Assuming you have a Stat model

@Injectable({
  providedIn: 'root'
})
export class StatService {
  apiUrl = "http://127.0.0.1:3000/stat";  // API URL for stats
  constructor(public httpclient: HttpClient) {}

  // Get all stats
  getTousStats() {
    return this.httpclient.get<Stat[]>(this.apiUrl);  // Retrieve all statistics
  }

  // Get a specific stat by ID
  getStat(id: string) {
    return this.httpclient.get<Stat>(this.apiUrl + "/" + id);  // Retrieve a single stat
  }

  // Delete a stat by ID
  supprimerStat(id: string) {
    return this.httpclient.delete<any>(this.apiUrl + "/" + id);  // Delete a stat
  }

  // Modify a stat
  modifierStat(id: string, stat: Stat) {
    const url = `${this.apiUrl}/${id}`;
    return this.httpclient.put<Stat>(url, stat);  // Update the stat data
  }

  // Add a new stat
  ajoutStat(stat: Stat) {
    return this.httpclient.post<any>(this.apiUrl, stat);  // Add a new stat
  }
  // Récupérer les statistiques d'un article en particulier
  getStatByArticle(articleId: number) {
    return this.httpclient.get<Stat>(`${this.apiUrl}/${articleId}/article/`);
  }
  
}
