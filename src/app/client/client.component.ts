import { Router } from '@angular/router';
import { ClientService } from './../Service/client.service';
 import { client } from './../model/clients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent  implements OnInit  {

  clients!: client[] ;
  router: any;
  clientName!: string;
  allClients!: client[];

  constructor( private ClientService : ClientService, private Router : Router )
           {}


           ngOnInit( ): void {
              this.getClients()

          }

          supprimerClient(p: client)
          { let conf = confirm("Etes-vous sûr ?");
             if (conf)
                this.ClientService.supprimerClient(p).subscribe(() =>{
                 console.log("client suprimé")
                 this.getClients();
                 this.Router.navigate(['clients']);
                });}


   getClients(){
      this.ClientService.ListerClients().subscribe(c  => {
      this.clients = c;
      console.log(client);
      })}

      rechercherClient()
      {
        this.ClientService.rechercherParName(this.clientName).
        subscribe(c1 => {
        this.clients = c1;
        console.log(c1)});
        }
        onKeyUp(filterText : string){
          this.clients = this.allClients.filter(item =>
          item.name?.toLowerCase().includes(filterText));
          }

}
