import { Injectable } from '@angular/core';
import { KeyValue } from '../models/KeyValue';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  grades: KeyValue[] = [
    new KeyValue(1, "Diplom"),
    new KeyValue(2, "Kardani"),
    new KeyValue(3, "Karshenasi"),
    new KeyValue(4, "Karshenasi Arshad"),
    new KeyValue(5, "Doktora"),
  ]

  constructor() { }

  getAll(): KeyValue[] {
    return this.grades;
  }
}
