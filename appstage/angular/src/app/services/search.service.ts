import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  private searchQuery = new BehaviorSubject<string>(''); 
  currentSearchQuery = this.searchQuery.asObservable(); 

  updateSearch(query: string) {
    this.searchQuery.next(query);
  }
}
