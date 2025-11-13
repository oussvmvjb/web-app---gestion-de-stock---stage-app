import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eddart',
  templateUrl: './eddart.component.html',
  styleUrls: ['./eddart.component.scss']
})
export class EddartComponent {
  sn: string = '';
  article: Article = new Article('', '', '', '', '', '', new Date());

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sn = this.route.snapshot.paramMap.get('sn') || '';
    if (this.sn) {
      this.getArticleData();
    }
  }

  getArticleData(): void {
    this.articleService.getarticle(this.sn).subscribe(
      (data) => {
        this.article = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données de l\'article', error);
      }
    );
  }

  saveChanges(): void {
    this.articleService.modifierarticle(this.sn, this.article).subscribe(
      () => {
        Swal.fire({
                    icon: 'success',
                    title: 'Article edited successfully',
                    showConfirmButton: false,
                    timer: 2500
                  });
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'article:', error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/menu']);
  }


}
