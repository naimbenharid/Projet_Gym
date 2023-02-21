import { Router } from '@angular/router';
import { PackService } from './../Service/pack.service';
import { Component, OnInit } from '@angular/core';
import { pack } from '../model/pack.model';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {

packs! : pack[];

constructor( private PackService : PackService,private router : Router){}

ngOnInit(): void {
  this.getPack();
}


  supprimerPack(p: pack)
       { let conf = confirm("Etes-vous sûr ?");
          if (conf)
             this.PackService.supprimerPack(p).subscribe(() =>{
              console.log("pack suprimé")
              this.getPack();
              this.router.navigate(['pack']);
             });

          }

          getPack(){
            this.PackService.ListerPack().subscribe(c  => {
            this.packs = c;
            console.log(pack);
            })}
}
