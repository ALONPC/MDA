import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  constructor() { }

  public anio:number = new Date().getFullYear();

  public direccion:string = "Compañía #2540 Oficina 103, Santiago";
  public correo:string = "mda.arq@gmail.com";
  public telefono:number = 26825253;

}
