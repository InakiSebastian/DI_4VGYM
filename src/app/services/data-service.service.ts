import { Injectable } from '@angular/core';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  devolverListaActividades() {
    let events: Activity[] = [
      new Activity(
        '5 de enero, 2025',
        'Gimnasio Central, Madrid',
        'Juan Pérez',
        'Cardio'
      ),
      new Activity(
        '10 de enero, 2025',
        'Gimnasio Fitness, Barcelona',
        'Ana Gómez',
        'Pesas'
      ),
      new Activity(
        '12 de enero, 2025',
        'Power Gym, Valencia',
        'Carlos Rodríguez',
        'Yoga'
      ),
      new Activity(
        '15 de enero, 2025',
        'Fit Club, Sevilla',
        'Laura Martínez',
        'Zumba'
      ),
      new Activity(
        '20 de enero, 2025',
        'Gimnasio Total, Bilbao',
        'Pedro López',
        'Entrenamiento funcional'
      ),
      new Activity(
        '25 de enero, 2025',
        'Sport Center, Alicante',
        'Marta García',
        'Pilates'
      ),
      new Activity(
        '1 de febrero, 2025',
        'Flex Gym, Zaragoza',
        'David Sánchez',
        'HIIT'
      ),
      new Activity(
        '3 de febrero, 2025',
        'Gym Pro, Málaga',
        'Luis Fernández',
        'Cardio'
      ),
      new Activity(
        '8 de febrero, 2025',
        'FitLife, Madrid',
        'Raúl González',
        'Pesas'
      ),
      new Activity(
        '12 de febrero, 2025',
        'VitalGym, Barcelona',
        'Sofía Ruiz',
        'Yoga'
      ),
      new Activity(
        '15 de febrero, 2025',
        'Strong Gym, Valencia',
        'José Martínez',
        'Entrenamiento funcional'
      ),
      new Activity(
        '18 de febrero, 2025',
        'Energy Gym, Bilbao',
        'Claudia Pérez',
        'Zumba'
      ),
      new Activity(
        '22 de febrero, 2025',
        'Active Fit, Sevilla',
        'Antonio Rodríguez',
        'HIIT'
      ),
      new Activity(
        '28 de febrero, 2025',
        'MaxFit, Alicante',
        'Sara Torres',
        'Pilates'
      ),
      new Activity(
        '2 de marzo, 2025',
        'StrongFit, Zaragoza',
        'Fernando López',
        'Pesas'
      ),
    ];

    return events;
  }
}
