import { pack } from './../model/pack.model';
import { PackService } from './../Service/pack.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-pack',
  templateUrl: './update-pack.component.html',
  styleUrls: ['./update-pack.component.css']
})
export class UpdatePackComponent {


  currentPack = new pack();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private packService: PackService) { }

    ngOnInit() {
      this.getPack();
    }


    updatePack() {
      this.packService.updatePack(this.currentPack).subscribe(prod =>
        {this.router.navigate(['pack'])});
      ;}


      getPack(){
        this.packService.ListerPackParId(this.activatedRoute.snapshot. params['id']).subscribe(
           {
             next : ( response : pack ) => {
               this.currentPack=response;
               console.log(this.currentPack)
             }
           }
        )
     }


    }
