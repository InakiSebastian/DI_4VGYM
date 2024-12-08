import { Component,input } from '@angular/core';

@Component({
  selector: 'app-actividad',
  imports: [],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.scss'
})
export class ActividadComponent {
  index = input();
  fecha = input("POR DEFINIR");
  lugar = input("POR DEFINIR");
  monitor = input("POR DEFINIR");
  tipo = input("POR DEFINIR");

}
