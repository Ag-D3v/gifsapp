import { Component,  DoCheck,  Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IGifsData } from '@gifs_dom/i-gifs-data';

@Component({
  selector: 'gv-listar',
  standalone: true,
  imports: [CommonModule],
  template: `
<ng-template ngFor let-item  [ngForOf]=listado let-i="index"  >

  <a href="#"  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span class=" spnbtnlime ">  {{item.buscado | titlecase  }}  </span>
</a>
</ng-template>
  `,
  styles: [
  ]
})
export class ListarComponent implements  DoCheck {
@Input() listado:IGifsData[] = [];

  constructor( ){  }

ngDoCheck(){
  //console.warn('listado docheck', this.listado);
}


}
