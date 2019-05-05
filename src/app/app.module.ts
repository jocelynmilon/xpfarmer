import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './authentification/user/user.component';
import { NewComponent } from './authentification/new/new.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { FooterComponent } from './footer/footer.component';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthentificationService } from './service/authentification.service';

const appRoutes: Routes = [
  { path: 'accueil', component:AccueilComponent },
  { path: 'parametre', component:ParametreComponent },
  { path: 'authentification/user', component:UserComponent },
  { path: 'authentification/new', component:NewComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewComponent,
    HeaderComponent,
    AccueilComponent,
    ParametreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      name: 'XpFarmer',
      maxAge: 15
    }),
    StoreModule.forRoot({}),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
   AuthentificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
