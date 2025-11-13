import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component';
import { LogeInComponent } from './loge-in/loge-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditaccComponent } from './editacc/editacc.component';
import { AddstorComponent } from './addstor/addstor.component';
import { StoreComponent } from './store/store.component';
import { SearchService } from './services/search.service';
import { StatComponent } from './stat/stat.component';
import { EddartComponent } from './eddart/eddart.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountComponent,
    LogeInComponent,
    SignUpComponent,
    EditaccComponent,
    AddstorComponent,
    StoreComponent,
    StatComponent,
    EddartComponent,


  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
