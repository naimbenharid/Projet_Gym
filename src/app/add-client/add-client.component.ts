import { Router } from '@angular/router';
import { OffreService } from './../Service/offre.service';
import { PackService } from './../Service/pack.service';
import { offre } from './../model/offre.model';
import { ClientService } from './../Service/client.service';
import { client } from './../model/clients.model';
import { Component, OnInit } from '@angular/core';
import { pack } from '../model/pack.model';
import { DUREE_CONTRATS } from '../nomOffreCT'




@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent  implements OnInit{
  newClient = new client();
  newClient2 = new client();
  offres! : offre[];
  packs! : pack[]; dureesContrats = DUREE_CONTRATS[0];

  constructor(private clientService : ClientService,
              private packService :PackService,
              private offreService:OffreService,
              private Router : Router)  {}


  ngOnInit(): void
    {
      this.getPacks();
      this.getOffres();
    }
  supprimerClient()
     {}

  addClient ()
    {
      this.clientService.ajouterClient(this.newClient).subscribe(v => {
      console.log(v);
      this.Router.navigate(['clients']);
      });
   }
   getOffres ()
      {
        this.offreService.ListerOffres().subscribe(c  =>
          {
            this.offres = c;
            console.log(pack);
          })
        this.offreService.getOffres();
          }

   getPacks ()
      {
        this.packService.ListerPack().subscribe(c  =>
          {
          this.packs = c;
          console.log(pack);
          })
          this.packService.getPacks();
   }


}
