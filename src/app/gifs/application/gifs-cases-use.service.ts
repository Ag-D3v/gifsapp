import { Injectable } from '@angular/core';
import { GifsRepository } from '@gifs_dom/a-gifs-repository';
import { IGifsBusq } from '@gifs_dom/i-gifs-busq';
import { IGifsData } from '@gifs_dom/i-gifs-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsCasesUseService {

  constructor(
    private gateway:GifsRepository
  ) { }

  listarbuscados():Observable<Array<IGifsData>> {
    return this.gateway.getAll();
  }

  nuevo(bsq:string):Observable<any>{
    return this.gateway.regNew(bsq);
  }

  consultar(bsq:string):Observable<any>{
    return this.gateway.search(bsq);
  }

  listarRespuesta():Observable<Array<IGifsBusq>>{
    return this.gateway.listBusq();
  }

}
