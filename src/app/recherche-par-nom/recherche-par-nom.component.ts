import { ClientService } from './../Service/client.service';
import { client } from './../model/clients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

clientName! : string ;
  clients! : client[];
  allClients! : client[];
constructor(private clientService:ClientService ){};

  ngOnInit(): void {

  }
  rechercherClient()
  {
    this.clientService.rechercherParName(this.clientName).
    subscribe(c1 => {
    this.clients = c1;
    console.log(c1)});
    }
    onKeyUp(filterText : string){
      this.clients = this.allClients.filter(item =>
      item.name?.toLowerCase().includes(filterText));
      }


}
