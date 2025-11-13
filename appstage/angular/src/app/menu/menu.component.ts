import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isLoading = true;  // The div will be shown while this is true
  loadingMessage: string = "Bienvenue";
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchQuery: string = '';

  @Output() searchChanged = new EventEmitter<string>();
  role: string | null = '';
  constructor(private searchService: SearchService,private authService: AuthService) {}

  ngOnInit() {
    this.role = localStorage.getItem('role'); 
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);  // 2000 milliseconds = 2 seconds
  
  }
  logout() {
    this.authService.logout();
    localStorage.removeItem('user');  
    
  }
  onSearchInput() {
    this.searchService.updateSearch(this.searchQuery);
  }
  }

