import { Observable } from "rxjs";
import { IGifsBusq } from "./i-gifs-busq";
import { IGifsData } from "./i-gifs-data";

export abstract class GifsRepository {
  abstract getAll(): Observable<Array<IGifsData>>;
  abstract regNew(bsq:string):Observable<any>;
  abstract search(bsq:string):Observable<any>;
  abstract listBusq():Observable<Array<IGifsBusq>>
}
