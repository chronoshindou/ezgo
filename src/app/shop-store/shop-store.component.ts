import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

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
  {position: 1, name: 'Hydrogen', weight: '3', symbol: '3', stock: 'n', price: 10.99},
  {position: 2, name: 'Helium', weight: '5', symbol: '3', stock: 'y', price: 2.49},
  {position: 3, name: 'Lithium', weight: '5', symbol: '4', stock: 'y',price: 2.34},
  {group: "Isle 3"},
  {position: 4, name: 'Beryllium', weight: '1', symbol: '2', stock: 'y', price: 3.99},
  {position: 5, name: 'Boron', weight: '1', symbol: '3', stock: 'y',price: 2.34},
  {position: 6, name: 'Carbon', weight: '7', symbol: '3', stock: 'y', price: 3},
  {group: "Isle 7"},
  {position: 7, name: 'Nitrogen', weight: '3', symbol: '1', stock: 'y', price: 3},
  {position: 8, name: 'Oxygen', weight: '5', symbol: '2', stock: 'y', price: 3},
  {position: 9, name: 'Fluorine', weight: '5', symbol: '3', stock: 'y',price: 2.34},
  {position: 10, name: 'Neon', weight: '5', symbol: '4', stock: 'y', price: 3},
];
//   {group: "Isle 1"},
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {group: "Isle 3"},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {group: "Isle 7"},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-shop-store',
  templateUrl: './shop-store.component.html',
  styleUrls: ['./shop-store.component.css']
})
export class ShopStoreComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol','price'];
  // dataSource = new MatTableDataSource<PeriodicElement|Group>(ELEMENT_DATA);
  dataSource = ELEMENT_DATA;
  selection = new SelectionModel<PeriodicElement>(true, []);
  
  constructor() { }

  ngOnInit() {
  }

  isGroup(index, item): boolean{
    return item.group;
  }

    /** Whether the number of selected elements matches the total number of rows. */
    // isAllSelected() {
    //   const numSelected = this.selection.selected.length;
    //   const numRows = this.dataSource.data.length;
    //   return numSelected === numRows;
    // }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    // masterToggle() {
    //   this.isAllSelected() ?
    //       this.selection.clear() :
    //       this.dataSource.data.forEach(row => this.selection.select(row));
    // }

}
