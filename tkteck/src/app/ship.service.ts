import { Injectable } from '@angular/core';
import { Ship } from './ship';
import { SHIPS } from './mock-ships';
/* 非同期的にデータを取得して表示するための実装 */
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor() { }

  getShips(): Observable<Ship[]> {
    return of(SHIPS);
  }
}
