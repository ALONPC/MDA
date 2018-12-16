import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {

  options: any = [];

  constructor() { 
    this.options = ['Inicio', 'Articulos técnicos'];
  }


}
