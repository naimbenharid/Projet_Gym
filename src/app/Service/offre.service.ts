import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { offre } from '../model/offre.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class OffreService {
offres! : offre [];
offre! : offre ;


apiURL: string ;
apiURL2: string ;
apiURL3: string ;
apiURL4: string ;
apiURL5!: string ;
apiURL6!: string ;


  constructor(private http : HttpClient)
   {
  this.apiURL =  'http://localhost:8081/offre/all';
  this.apiURL2 =  'http://localhost:8081/offre/id/';
  this.apiURL3 =  'http://localhost:8081/offre/add';
  this.apiURL4 = 'http://localhost:8081/offre/delete/';
  this.apiURL5 =  'http://localhost:8081/offre/name/';
  this.apiURL6! =  'http://localhost:8081/offre/update';

}

ListerOffres(): Observable<offre[]> {
  return this.http.get<offre[]> (this.apiURL);}

ListerOffreParId(id : number): Observable<offre> {
    return this.http.get<offre> (this.apiURL2+id);}

ajouterOffre( c: offre):Observable<offre>{
    return this.http.post<offre>(this.apiURL3, c, httpOptions);
    }

supprimerOffre( c1: offre){
    return this.http.delete(`${this.apiURL4}${c1.id}`)
 }

updateOffre( c: offre):Observable<offre>{
  return this.http.put<offre>(this.apiURL6, c, httpOptions);
  }
 rechercherParName(nom: string):Observable< offre[]>
        {
      const url = `${this.apiURL5}/name/${nom}`;
      return this.http.get<offre[]>(url);
      }

      getOffres(){
        this.ListerOffres().subscribe({
        next: (response: offre[]) => {
        this.offres = response;
          },
        error: (e) => console.log(e),
        complete: () => {}
         })
           }

}
