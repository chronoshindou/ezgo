import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  stock?: string;
  price: number;
}

export interface Group {
  group: string;
}

const ELEMENT_DATA: ( PeriodicElement | Group)[] = [
  {group: "Isle 1"},
  {position: 4, name: 'Beryllium', weight: '1', symbol: '2', stock: 'y', price: 3},
  {position: 5, name: 'Boron', weight: '1', symbol: '3', stock: 'y', price: 3},
  {position: 6, name: 'Carbon', weight: '7', symbol: '3', stock: 'y', price: 3},
  {group: "Isle 2"},
  {position: 1, name: 'Hydrogen', weight: '3', symbol: '3', stock: 'y', price: 3},
  {position: 2, name: 'Helium', weight: '5', symbol: '3', stock: 'n', price: 3},
  {position: 3, name: 'Lithium', weight: '5', symbol: '4', stock: 'y', price: 3},
  {group: "Isle 5"},
  {position: 7, name: 'Nitrogen', weight: '3', symbol: '1', stock: 'y', price: 3},
  {position: 8, name: 'Oxygen', weight: '5', symbol: '2', stock: 'y', price: 3},
  {position: 9, name: 'Fluorine', weight: '5', symbol: '3', stock: 'n', price: 3},
  {position: 10, name: 'Neon', weight: '5', symbol: '4', stock: 'y', price: 3},
];

@Component({
  selector: 'app-shop-store2',
  templateUrl: './shop-store2.component.html',
  styleUrls: ['./shop-store2.component.css']
})
export class ShopStore2Component implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'price'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }

  isGroup(index, item): boolean{
    return item.group;
  }

}
