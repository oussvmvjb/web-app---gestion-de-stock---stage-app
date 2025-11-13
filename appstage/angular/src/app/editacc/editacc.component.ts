import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../models/etudiant';
import { etudiantService } from '../services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editacc',
  templateUrl: './editacc.component.html',
  styleUrls: ['./editacc.component.scss']
})
export class EditaccComponent {
  cin: string = '';
  e: Etudiant = new Etudiant('', '', '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private etudiantService: etudiantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.cin = this.route.snapshot.paramMap.get('cin') || '';
    if (this.cin) {
      this.getEtudiantData();
    }
  }

  getEtudiantData(): void {
    this.etudiantService.getetudiant(this.cin).subscribe(
      (data) => {
        this.e = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données étudiant', error);
      }
    );
  }

  saveChanges(): void {
    this.etudiantService.modifieretudiant(this.cin, this.e).subscribe(
      () => {
        Swal.fire({
                            icon: 'success',
                            title: 'Account edited successfully',
                            showConfirmButton: false,
                            timer: 2500
                          });
        this.router.navigate(['/menu/account']); 
      },
      (error) => {
        console.error('Error updating student data:', error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/menu/account']); 
  }

}
