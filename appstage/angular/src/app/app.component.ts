import { Component } from '@angular/core';
import { Etudiant } from './models/etudiant';
import { ActivatedRoute, Router } from '@angular/router';
import { etudiantService } from '../app/services/etudiant.service';
import { StoreComponent } from './store/store.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular';
  cin: string = '';
    e: Etudiant = new Etudiant('', '', '', '', '', '');
  
    constructor(
      private route: ActivatedRoute,
      private etudiantService: etudiantService,
      private router: Router
    ) {}
  ngOnInit(): void {
    
    this.cin = this.route.snapshot.paramMap.get('cin') || '';
    
  }

}
