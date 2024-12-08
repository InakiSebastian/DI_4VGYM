import { Component } from '@angular/core';
import { ActividadComponent } from '../actividad/actividad.component';
import { DataServiceService } from '../services/data-service.service';
import { Activity } from '../models/activity.model';

@Component({
  selector: 'app-contenedor-actividades',
  imports: [ActividadComponent],
  templateUrl: './contenedor-actividades.component.html',
  styleUrl: './contenedor-actividades.component.scss',
})
export class ContenedorActividadesComponent {
  constructor(private dataService: DataServiceService) {}
  listaActividades: Activity[] = [];

  ngOnInit(): void {
    this.listaActividades = this.dataService.devolverListaActividades();
  }
}
