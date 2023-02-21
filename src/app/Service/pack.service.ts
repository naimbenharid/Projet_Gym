import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pack } from '../model/pack.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class PackService {
    pack! : pack
    packs! : pack[];


    apiURL: string ;
    apiURL2: string ;
    apiURL3: string ;
    apiURL4: string ;
    apiURL5!: string ;
    apiURL6!: string ;
      constructor(private http : HttpClient)
      {
      this.apiURL! =  'http://localhost:8081/pack/all';
      this.apiURL2! =  'http://localhost:8081/pack/id/';
      this.apiURL3! =  'http://localhost:8081/pack/add';
      this.apiURL4! = 'http://localhost:8081/pack/delete/';
      this.apiURL5! =  'http://localhost:8081/pack/name/';
      this.apiURL6! =  'http://localhost:8081/pack/update';



    }

    ListerPack(): Observable<pack[]> {
      return this.http.get<pack[]> (this.apiURL);}

    ListerPackParId(id : number): Observable<pack> {
        return this.http.get<pack> (this.apiURL2+id);}

    ajouterPack( c: pack):Observable<pack>{
        return this.http.post<pack>(this.apiURL3, c, httpOptions);
        }
     updatePack( c: pack):Observable<pack>{
          return this.http.put<pack>(this.apiURL6, c, httpOptions);
          }


    supprimerPack( c1: pack)
        {
          return this.http.delete(`${this.apiURL4!}${c1.id}`)
        }


    rechercherParName(nom: string):Observable< pack[]>
              {
              const url = `${this.apiURL5}/name/${nom}`;
              return this.http.get<pack[]>(url);
              }

              getPacks(){
                this.ListerPack().subscribe({
                next: (response: pack[]) => {
                this.packs = response;
                  },
                error: (e) => console.log(e),
                complete: () => {}
                 })
                   }
                  
}
