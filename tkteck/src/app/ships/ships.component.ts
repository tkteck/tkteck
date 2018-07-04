import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship';
import { ShipService } from '../ship.service';
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships : Ship[];

  selectedShip: Ship;

  constructor(private shipService: ShipService) { }

  ngOnInit() {
    this.getShips();
  }

  onSelect(ship: Ship): void {
    this.selectedShip = ship;
  }

  getShips(): void {
    this.shipService.getShips()
    .subscribe(ships => this.ships = ships)
  }
}
