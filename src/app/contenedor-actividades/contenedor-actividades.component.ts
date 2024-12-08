import { Component } from '@angular/core';
import { ActividadComponent } from "../actividad/actividad.component";
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-contenedor-actividades',
  imports: [ActividadComponent],
  templateUrl: './contenedor-actividades.component.html',
  styleUrl: './contenedor-actividades.component.scss'
})
export class ContenedorActividadesComponent {

  
  // constructor(private dataService: DataServiceService){}; // NO CONSIGO QUE FUNCIONE.... MUESTRA ERROR NO SE LLEGA A INICIALIZAR
  dataService = new DataServiceService();

  listaActividades = this.dataService.devolverListaActividades();


}
