import { Router } from '@angular/router';
import { client } from './../model/clients.model';
import { OffreService } from './../Service/offre.service';
import { Component, OnInit } from '@angular/core';
import { offre } from '../model/offre.model';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  offres! : offre[];


constructor( private OffreService : OffreService,private router : Router){}

ngOnInit(): void {
  this.getOffres();
}

supprimerOffre(p: offre)
       { let conf = confirm("Etes-vous sûr ?");
          if (conf)
             this.OffreService.supprimerOffre(p).subscribe(() =>{
              console.log("offre suprimé")
              this.getOffres();
              this.router.navigate(['offre']);
             });}

  getOffres(){
    this.OffreService.ListerOffres().subscribe(c  => {
    this.offres = c;
    console.log(this.offres);
    })}
}
