import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  devolverListaActividades() {
    let events = [
      {
        fecha: '5 de enero, 2025',
        lugar: 'Gimnasio Central, Madrid',
        monitor: 'Juan Pérez',
        tipo: 'Cardio',
      },
      {
        fecha: '10 de enero, 2025',
        lugar: 'Gimnasio Fitness, Barcelona',
        monitor: 'Ana Gómez',
        tipo: 'Pesas',
      },
      {
        fecha: '12 de enero, 2025',
        lugar: 'Power Gym, Valencia',
        monitor: 'Carlos Rodríguez',
        tipo: 'Yoga',
      },
      {
        fecha: '15 de enero, 2025',
        lugar: 'Fit Club, Sevilla',
        monitor: 'Laura Martínez',
        tipo: 'Zumba',
      },
      {
        fecha: '20 de enero, 2025',
        lugar: 'Gimnasio Total, Bilbao',
        monitor: 'Pedro López',
        tipo: 'Entrenamiento funcional',
      },
      {
        fecha: '25 de enero, 2025',
        lugar: 'Sport Center, Alicante',
        monitor: 'Marta García',
        tipo: 'Pilates',
      },
      {
        fecha: '1 de febrero, 2025',
        lugar: 'Flex Gym, Zaragoza',
        monitor: 'David Sánchez',
        tipo: 'HIIT',
      },
      {
        fecha: '3 de febrero, 2025',
        lugar: 'Gym Pro, Málaga',
        monitor: 'Luis Fernández',
        tipo: 'Cardio',
      },
      {
        fecha: '8 de febrero, 2025',
        lugar: 'FitLife, Madrid',
        monitor: 'Raúl González',
        tipo: 'Pesas',
      },
      {
        fecha: '12 de febrero, 2025',
        lugar: 'VitalGym, Barcelona',
        monitor: 'Sofía Ruiz',
        tipo: 'Yoga',
      },
      {
        fecha: '15 de febrero, 2025',
        lugar: 'Strong Gym, Valencia',
        monitor: 'José Martínez',
        tipo: 'Entrenamiento funcional',
      },
      {
        fecha: '18 de febrero, 2025',
        lugar: 'Energy Gym, Bilbao',
        monitor: 'Claudia Pérez',
        tipo: 'Zumba',
      },
      {
        fecha: '22 de febrero, 2025',
        lugar: 'Active Fit, Sevilla',
        monitor: 'Antonio Rodríguez',
        tipo: 'HIIT',
      },
      {
        fecha: '28 de febrero, 2025',
        lugar: 'MaxFit, Alicante',
        monitor: 'Sara Torres',
        tipo: 'Pilates',
      },
      {
        fecha: '2 de marzo, 2025',
        lugar: 'StrongFit, Zaragoza',
        monitor: 'Fernando López',
        tipo: 'Pesas',
      },
    ];

    return events;
  }
}
