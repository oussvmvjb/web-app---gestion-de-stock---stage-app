import { Component } from '@angular/core';
import { Article } from '../models/article';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-addstor',
  templateUrl: './addstor.component.html',
  styleUrls: ['./addstor.component.scss']
})
export class AddstorComponent {
  constructor(private articleService: ArticleService,private router: Router) {}

  verifier(form: any) {
    if (form.valid) {
      const newArticle: Article = {
        nomarticle: form.value.nomarticle,
        sn: form.value.sn,
        model: form.value.model,
        description: form.value.description,
        statu: form.value.statu,
        emplacement: form.value.emplacement,
        regesdate: new Date()
      };
  
      console.log(newArticle);
  
      this.articleService.ajoutarticle(newArticle).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Article added successfully',
            showConfirmButton: false,
            timer: 2500
          });

          this.router.navigate(['/menu']);
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an error adding the article.'
          });
        }
      );
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Form is invalid. Please fill in all required fields.'
      });
    }
  }
  
}
