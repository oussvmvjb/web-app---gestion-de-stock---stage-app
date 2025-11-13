import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../models/etudiant';
import { etudiantService } from '../services/etudiant.service';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  cin: string = '';
  e: Etudiant = new Etudiant('', '', '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private etudiantService: etudiantService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user'); 
    if (!user) {
      this.router.navigate(['/loge-in']); 
    } else {
      this.cin = JSON.parse(user).cin;
  
      if (this.cin) {
        this.getEtudiantData();
      }
    }
  }
  
  logout() {
    localStorage.removeItem('user');  
    this.router.navigate(['/loge-in']);
  }

  
  getEtudiantData(): void {
    this.etudiantService.getetudiant(this.cin).subscribe(
      (data) => {
        this.e = data;
      },
      (error) => {
        console.error('Error retrieving student data', error);
      }
    );
  }

  onEdit(): void {
    this.router.navigate(['/menu/editacc', this.cin]);
  }

  onDelete1(): void {
    
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      this.etudiantService.supprimeretudiant(this.cin).subscribe(
        () => {
          console.log('Account deleted successfully!');
          alert('Your account has been deleted.');
          
          localStorage.removeItem('user'); 
          this.router.navigate(['/loge-in']);
        },
        (error) => {
          console.error('Error deleting account:', error);
          alert('An error occurred while deleting your account.');
        }
      );
    }
  }
  onDelete() {
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
          this.etudiantService.supprimeretudiant(this.cin).subscribe(
            response => {
              Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'The account has been deleted.',
                showConfirmButton: false,
                timer: 2500
              });
              localStorage.removeItem('user'); 
              this.router.navigate(['/loge-in']);
              
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
    
    }
}
