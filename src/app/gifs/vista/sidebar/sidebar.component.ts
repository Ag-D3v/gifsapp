import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarComponent } from '@gifs_ui/listar.component';
import { Subscription } from 'rxjs';
import { IGifsData } from '@gifs_dom/i-gifs-data';
import { GifsCasesUseService } from '@gifs_app/gifs-cases-use.service';

@Component({
  selector: 'gv-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, ListarComponent],
  template: `
    <div class='bg-black border-gray-100 border-t-0 border-l-0 border-b-0  text-white p-3 w-40 ' #sidebar id='sidebar'   >
      <h3 class='text-lg mb-5 '  >Gifs App</h3>

      <hr  >

      <div class='list-group list-reset mt-9 '>
<gv-listar [listado]="listado" ></gv-listar>
</div>
    </div>
  `,
  styles: [
  ]
})
export class SidebarComponent implements OnDestroy, OnInit {

res!:Subscription;
listado:IGifsData[] = [];

constructor(
  private api: GifsCasesUseService
){

}

ngOnDestroy(){
this.res?.unsubscribe();
}

ngOnInit(){

   this.res = this.api.listarbuscados().subscribe( r => {
this.listado  = r;
    });
}


}
