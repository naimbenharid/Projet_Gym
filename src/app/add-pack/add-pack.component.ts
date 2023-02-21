import { Router } from '@angular/router';
import { PackService } from './../Service/pack.service';
import { Component } from '@angular/core';
import { pack } from '../model/pack.model';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.css']
})
export class AddPackComponent {
  newPack = new pack();

 constructor(private PackService : PackService,private router : Router){}

 supprimerPack() {}

 addPack ()
 {this.PackService.ajouterPack(this.newPack).subscribe(v => {
   console.log(v);
   this.router.navigate(['pack']);
   });

 }

}
