import { PackService } from './../Service/pack.service';
import { OffreService } from './../Service/offre.service';
import { ClientService } from './../Service/client.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '../model/clients.model';
import { pack } from '../model/pack.model';
import { offre } from '../model/offre.model';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent {

  currentClient = new client();
  currentClient2 = new offre();
  currentClient3 = new pack();


  packs!: pack [] ;
  offres! : offre [];

constructor(private activatedRoute: ActivatedRoute,
            private router :Router,
            private ClientService: ClientService,
            private offreService : OffreService,
            private PackService : PackService) { }


 ngOnInit()
  {
  this.getClient();
  this.getOffres();
  this.getPacks();
  }

updateClient()
  {
  this.ClientService.ajouterClient(this.currentClient).subscribe();
  this.router.navigate(['clients']);
  }

getClient()
  {
   this.ClientService.ListerClientParId(this.activatedRoute.snapshot. params['id'])
   .subscribe(
      {
        next : ( response : client ) =>
         {
          this.currentClient=response;
          console.log(this.currentClient)
        }
      }
   )
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
  this.PackService.ListerPack().subscribe(c  =>
    {
    this.packs = c;
    console.log(pack);
    })
    this.PackService.getPacks();
}



}


