import { pack } from './../model/pack.model';
import { client } from './../model/clients.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ClientService
 {      clientt! : client ;
        clients! : client[];
        packs! : pack[];
        apiURL: string ;
        apiURL2: string ;
        apiURL3: string ;
        apiURL4: string ;
        apiURL5!: string ;

          constructor(private http : HttpClient)
           {
          this.apiURL =  'http://localhost:8081/client/all';
          this.apiURL2 =  'http://localhost:8081/client/id/';
          this.apiURL3 =  'http://localhost:8081/client/add';
          this.apiURL4 = 'http://localhost:8081/client/delete/';
          this.apiURL5 =  'http://localhost:8081/client/name/';

        }

    ListerClients(): Observable<client[]> {
          return this.http.get<client[]> (this.apiURL);}

    ListerClientParId(id : number): Observable<client> {
            return this.http.get<client> (this.apiURL2+id);}

    ajouterClient( c: client):Observable<client>{
            return this.http.post<client>(this.apiURL3, c, httpOptions);
            }

  supprimerClient( c1: client){
        return this.http.delete(`${this.apiURL4}${c1.id}`)
         }

  rechercherParName(nom: string):Observable< client[]>
          {
          const url = `${this.apiURL5}/name/${nom}`;
          return this.http.get<client[]>(url);
          }


}
