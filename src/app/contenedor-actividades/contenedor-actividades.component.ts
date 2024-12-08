import { Component } from '@angular/core';
import { ActividadComponent } from '../actividad/actividad.component';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-contenedor-actividades',
  imports: [ActividadComponent],
  templateUrl: './contenedor-actividades.component.html',
  styleUrl: './contenedor-actividades.component.scss',
})
export class ContenedorActividadesComponent {
  constructor(private dataService: DataServiceService) {}
  listaActividades: any = [];

  ngOnInit(): void {
    this.listaActividades = this.dataService.devolverListaActividades();
  }
}
