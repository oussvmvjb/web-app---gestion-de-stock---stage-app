import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Etudiant} from './../models/etudiant';
import { etudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  errernom : string;
  errerpre : string;
  erreml : string;
  errcin : string;
  verif : string;
  errpsw : string;
  showpsw: boolean;
  test:boolean;
   constructor(public es: etudiantService ,private router: Router) {
   this.errernom="";
   this.errerpre="";
   this.erreml="";
   this.errcin="";
   this.errpsw="";
   this.verif="";
   this.showpsw=false;
   this.test=false; 
    
 } 
 
 eye(): void {
   this.showpsw = !this.showpsw;
 }
     verifier(f:NgForm):void
     {
       let nom = f.value['nom'];
       let prenom = f.value['prenom'];
       let email = f.value['email'];
       let Emplo = f.value['Emplo'];
       let cin = f.value['cin'];
       let psw = f.value['psw'];

       
       
       //------------------------NOM---------------------------
       if(nom==''){
         this.errernom="Nom invalide!!!";  
       }
       else{
         this.errernom="";
       }

    //---------------------PRENOM------------------------------
    if(prenom==''){
     this.errerpre="Prenom invalide!!!";  
   }
   else{
     this.errerpre="";
   }

   if(email==''){
    this.erreml="Email invalide!!!";  
  }
  else{
    this.erreml="";
  } 


  if(psw==''){
    this.errpsw="Password invalide!!!";  
  }
  else{
    this.errpsw="";
  }  

   //----------------------CIN-----------------------------
    if(cin==''||cin.length!=8){
     this.errcin="C.I.N invalide!!!";  
   }
   else{
     this.errcin="";
     this.verif="This is your password";
   }
   



    //----------------------EMAIL-----------------------------
   
   let e: Etudiant;
   e= new Etudiant (cin,nom,prenom,email,Emplo,psw) ;
   console.log(e);
   this.es.ajoutetudiant(e).subscribe(
    () => { 
      Swal.fire({
                  icon: 'success',
                  title: 'Account added successfully',
                  showConfirmButton: false,
                  timer: 2500
                });
      this.router.navigate(['/menu']);
    },
    () => {alert('verifier tout les chomp ou vous avez deja un compte');
    }
    );
     }
   }
