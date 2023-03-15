import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GifsCasesUseService } from '@gifs_app/gifs-cases-use.service';

@Component({
  selector: 'gv-buscar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
      <div class='grid gap-6 mb-6 md:grid-cols-2 ml-6 mt-6 ' >
        <div class=' '>
        <label for='searchinput' class='lblinput ' >Buscar:</label>
        <input id='searchinput' type=search class='frminput ' (keyup.enter)='buscar()' #txtbuscado placeholder='Buscar gifs... '  >
        </div>
      </div>
  `,
  styles: [
  ]
})
export class BuscarComponent {

  constructor(
    private gate:GifsCasesUseService
  ){}

  @ViewChild('txtbuscado') txtbuscado!:ElementRef<HTMLInputElement>;

  buscar() {
    let v = this.txtbuscado.nativeElement.value;

    this.gate.nuevo( v );
    this.gate.consultar(v);

    this.txtbuscado.nativeElement.value ='';


  }

}
