import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { etudiantService } from '../services/etudiant.service';
import { Etudiant } from '../models/etudiant';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loge-in',
  templateUrl: './loge-in.component.html',
  styleUrls: ['./loge-in.component.scss']
})
export class LogeInComponent {

  showpsw: boolean = false;
  e!: Etudiant;
  errer : string;
  errera : string;

  constructor(private router: Router, public ar: ActivatedRoute, public es: etudiantService ,private authService: AuthService) {
    this.errer="";
    this.errera="";
  }
  
  eye() {
    this.showpsw = !this.showpsw;
  }

  onLogin(f: NgForm) {
    let cin = f.value['cin'];
    let psw = f.value['psw'];

    this.es.getetudiant(cin).subscribe(exists => {
      console.log(exists.cin);

      if (exists.cin == cin && exists.psw == psw) {
        
        localStorage.setItem('user', JSON.stringify(exists));
        if (cin === '12345678' && psw === 'chef') {
          localStorage.setItem('role', 'chef');
          console.log('chef');
        } else {
          localStorage.setItem('role', 'user');
          console.log('user');

        }
        this.errera="Bienvenue.";
        this.router.navigate(['/menu']);
      } else {
        this.errer="Le CIN n'existe pas ou le mot de passe est incorrect.";  
      }
    });
  }
}
