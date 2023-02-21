import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { FormsModule } from '@angular/forms';
import { OffreComponent } from './offre/offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { PackComponent } from './pack/pack.component';
import { AddPackComponent } from './add-pack/add-pack.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdatePackComponent } from './update-pack/update-pack.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AddClientComponent,
    OffreComponent,
    AddOffreComponent,
    PackComponent,
    AddPackComponent,
    UpdateClientComponent,
    UpdatePackComponent,
    UpdateOffreComponent,
    RechercheParNomComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule ,  AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
