import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuscarComponent } from './buscar.component';
import { ResultadoComponent } from './resultado.component';

@Component({
  selector: 'gv-main',
  standalone: true,
  imports: [CommonModule, RouterModule,SidebarComponent, BuscarComponent, ResultadoComponent ],
  template: `
  <div class='flex  ' >
  <!-- sidebar -->
  <gv-sidebar></gv-sidebar>
    <!-- end sidebar -->
<!-- container -->
  <div class='container mx-auto  ' >
  <!-- barra busqueda -->
<gv-buscar></gv-buscar>
      <!-- fin barra busqueda -->
<hr>
  <div class='container  pl-10 pt-6 overflow-hidden h-[85vh] '  >
    <div class='h-[100%]  overflow-auto  ' >

    <gv-resultado class='flex flex-wrap ' ></gv-resultado>
    </div>
  </div>
  <!-- resultado de busqueda -->
  </div>
  <!-- fin de container -->
</div>
  `,
  styles: [
  ]
})
export class MainComponent   {


}
