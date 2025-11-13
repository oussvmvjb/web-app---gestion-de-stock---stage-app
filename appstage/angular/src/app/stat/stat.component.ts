import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Stat } from '../models/stat';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  statistiques: Stat[] = []; // Declare the statistiques array to hold the data

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getStatistiquesParEmplacement().subscribe(
      (data: { emplacement: string, enPanne: number, enStock: number, enReparation: number, rebut: number }[]) => {
        // Map the API response to the Stat model if necessary
        this.statistiques = data.map(item => new Stat(item.emplacement, item.enPanne, item.enStock, item.enReparation, item.rebut));
      },
      error => {
        console.error('Error fetching statistics', error);
      }
    );
  }
}
