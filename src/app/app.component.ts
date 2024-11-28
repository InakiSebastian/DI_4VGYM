import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { NavbarComponent } from './navbar/navbar.component';
import { ContenedorActividadesComponent } from "./contenedor-actividades/contenedor-actividades.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ContenedorActividadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'gym4v';
  ngOnInit(): void {
    initFlowbite();
  }
}
