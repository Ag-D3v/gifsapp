import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GifsRepository } from '@gifs_dom/a-gifs-repository';
import { Observable, of } from 'rxjs';
import { IGifsData } from '@gifs_dom/i-gifs-data';
import { enviroment } from 'src/enviroments/enviroment';
import {  IGifsBusq } from '@gifs_dom/i-gifs-busq';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService extends GifsRepository {
private data:IGifsData[] = [];
private datbsq:IGifsBusq[] = [];

private key:string = enviroment.apikey;
private url:string = enviroment.apiurl;

  constructor(
    private http: HttpClient
  ) {
  super();
  }

  getAll():Observable<IGifsData[]> {
    return of(this.data);
  }

  regNew(bsq:string ):Observable<IGifsData[]> {
    let continuar = false;

    if( bsq.trim().length == 0 ) {
      return of(this.data);
    }

for ( const [k, v ] of Object.entries(this.data)  ){
  if(Number(k)==14) {
    this.data.pop();
  }
  if ( Object.values(v)[0] == bsq.toUpperCase().trim() ) {
    return of(this.data);
  };

}
    this.data.unshift({
     buscado: bsq.toUpperCase().trim()
    });

    return of([...this.data]);
  }

 search(bsq:string):Observable<number> {
this.datbsq = [];

    if( bsq.trim().length == 0 ) {
      bsq='dr. house';
//      return of(0);
    }

this.http.get(this.url+'?api_key='+this.key+'&q='+bsq.trim()).subscribe( (r:any) => {
 if( Object.entries(r.data!).length > 0 ){
    this.datbsq = [...r.data];
    return of(1);
 }
 return of(0);

});



    return of(1);

 }

 listBusq():Observable<IGifsBusq[]>{
    return of(this.datbsq);
 }

}
