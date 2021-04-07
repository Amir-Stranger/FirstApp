import { Injectable } from '@angular/core';
import { KeyValue } from '../models/KeyValue';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  gender: KeyValue[] = [
    new KeyValue(1, "Male"),
    new KeyValue(2, "Female"),
  ]

  constructor() { }

  getAll(): KeyValue[] {
    return this.gender;
  }
}
