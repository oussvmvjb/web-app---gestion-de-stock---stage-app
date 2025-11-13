import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;
  private cin: string | null = null;
  constructor(private router: Router) {}

  login(cin: string) {
    console.log("Logging in...",this.cin); 
    this.router.navigate(['/menu']);
    this.isLoggedInStatus = true;
    this.cin = cin;
    localStorage.setItem('cin', cin);
  }

  logout(): void {
    console.log("Logging in false",this.cin);
    this.isLoggedInStatus = false;
    this.router.navigate(['/loge-in']); 
    this.cin = null;
    localStorage.removeItem('cin');
  }

isLoggedIn(): boolean {
  const user = localStorage.getItem('user');
  console.log("AuthService - isLoggedIn:", !!user);
  return !!user;
}

  getCin(): string | null {
    return this.cin || localStorage.getItem('cin');
}}
