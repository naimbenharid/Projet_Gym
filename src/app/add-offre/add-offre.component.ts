import { Router } from '@angular/router';
import { PackService } from './../Service/pack.service';
import { OffreService } from './../Service/offre.service';
import { Component, OnInit } from '@angular/core';
import { offre } from '../model/offre.model';
import { pack } from '../model/pack.model';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
  packs! : pack[];
  newOffre = new offre();

  constructor(private OffreService : OffreService ,
                private packService : PackService,
                private Router :Router){}

  ngOnInit(): void
    {this.getPacks();
    }

    // Template driven forms --- reactive forms

    supprimerOffre() {}

    addOffre()
     {
      console.log(this.newOffre);
     // this.newOffre.pack = this.newOffre.myPacks.id;

        this.OffreService.ajouterOffre(this.newOffre).subscribe(v => {
        console.log(v);
        this.Router.navigate(['offre']);
        });
    }

    getPacks ()
    {
      this.packService.ListerPack().subscribe(c  => {
        this.packs = c;
        console.log(pack);
        })
        this.packService.getPacks();
    }

}
