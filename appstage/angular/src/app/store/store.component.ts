import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { StatService } from '../services/stat.service';
import { Article } from '../models/article';
import { Stat } from '../models/stat';
import { SearchService } from '../services/search.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

 // Add this enum

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [DatePipe]
})
export class StoreComponent implements OnInit {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  flippedCards: { [key: string]: boolean } = {};

  constructor(
    private articleService: ArticleService,
    private searchService: SearchService,
    private statService: StatService,
    private router: Router,
   
    
  ) {}

  ngOnInit() {
    this.articleService.getTousarticle().subscribe(
      (data: Article[]) => {
        this.articles = data;
        this.filteredArticles = data;
      },
      (error) => {
        console.error('Error fetching articles', error);
      }
    );

    this.searchService.currentSearchQuery.subscribe(query => {
      this.filterArticles(query);
    });
  }

  toggleCard(articleId: string) {
    this.flippedCards[articleId] = !this.flippedCards[articleId];
  }

  filterArticles(searchQuery: string) {
    if (!searchQuery) {
      this.filteredArticles = this.articles;
      return;
    }

    this.filteredArticles = this.articles.filter(article =>
      article.nomarticle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.sn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.statu.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  updateArticleStatus(article: Article, statu: string) {
    this.articleService.updateArticleStatus(article.sn, statu).subscribe(
      (response) => {
        article.statu = statu;
        console.log('Article status updated:', statu);
        
      },
      (error) => {
        console.error('Error updating article status:', error);
      }
    );
  }
  deleteArticle(article: Article) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the deletion
        this.articleService.supprimerarticle(article.sn).subscribe(
          response => {
            this.articles = this.articles.filter(a => a.sn !== article.sn);
          this.filteredArticles = this.filteredArticles.filter(a => a.sn !== article.sn);
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'The article has been deleted.',
              showConfirmButton: false,
              timer: 2500
            });
            // Optionally, reload or update the list of articles after deletion
            
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong. Try again later.',
            });
          }
        );
      }
    });
  
  }}