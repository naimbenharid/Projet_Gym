import { PackService } from './../Service/pack.service';
import { offre } from './../model/offre.model';
import { OffreService } from './../Service/offre.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pack } from '../model/pack.model';


@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent {

  currentOffre = new offre();
  packs! : pack[];

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private offreService: OffreService,
              private PackService : PackService) { }

    ngOnInit()
     {
        this.getOffre();
        this.PackService.getPacks();
     }
      updateOffre()
        {
          this.offreService.ajouterOffre(this.currentOffre).subscribe();
          this.router.navigate(['offre']);
        }


          getOffre(){
            this.offreService.ListerOffreParId(this.activatedRoute.snapshot. params['id']).subscribe(
               {
                 next : ( response : offre ) => {
                   this.currentOffre=response;
                   console.log(this.currentOffre)
                 }
               }
            )
         }
}

