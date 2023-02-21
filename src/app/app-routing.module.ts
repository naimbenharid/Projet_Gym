import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { AddPackComponent } from './add-pack/add-pack.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { OffreComponent } from './offre/offre.component';
import { PackComponent } from './pack/pack.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { UpdatePackComponent } from './update-pack/update-pack.component';

const routes: Routes = [


  {path: "clients", component: ClientComponent},
  {path: "addclient", component: AddClientComponent},
  {path: "updateclient/:id", component: UpdateClientComponent},

  {path: "offre", component: OffreComponent},
  {path: "addoffre", component: AddOffreComponent},
  {path: "updateoffre/:id", component: UpdateOffreComponent},

  {path: "pack", component: PackComponent},
  {path: "addpack", component: AddPackComponent},
  {path: "updatepack/:id", component: UpdatePackComponent},

  {path: "rechercheParNom", component: RechercheParNomComponent},

  {path: "home", component: HomeComponent},
  {path : "", redirectTo:"", pathMatch:"full"},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
