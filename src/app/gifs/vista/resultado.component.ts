import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { GifsCasesUseService } from '@gifs_app/gifs-cases-use.service';
import { IGifsBusq } from '@gifs_dom/i-gifs-busq';

@Component({
  selector: 'gv-resultado',
  standalone: true,
  imports: [CommonModule],
  template: `

<ng-template ngFor let-item  [ngForOf]=listado let-i="index"  >
<div class="basis-1/2 md:basis-1/3" >
<div class="w-full max-w-sm bg-white ">
    <a href="#">
        <img  [src]="item.images!.downsized_medium!.url!"  alt="product image" />
    </a>
</div>
</div>
</ng-template>
  `,
  styles: [
  ]
})
export class ResultadoComponent implements OnDestroy,  DoCheck {
resp!:Subscription;
listado:IGifsBusq[]= [];

constructor(
  private api:GifsCasesUseService
){}

ngOnDestroy(){
  this.resp?.unsubscribe();
}

ngDoCheck(){

this.resp = this.api.listarRespuesta().subscribe( r => {
  console.log(r);
  this.listado = [ ...r];
});


}


}
