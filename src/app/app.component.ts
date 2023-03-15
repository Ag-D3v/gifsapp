import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'gv-root',
  standalone:true,
  imports:[ RouterModule],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'gifsapp';
}
