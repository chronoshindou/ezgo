import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

import {map, startWith} from 'rxjs/operators';
import {Hero} from '../hero';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  myControl = new FormControl();
  options: Hero[] = [
    {id: 1, name: 'Illy Coffee 500g'},
    {id: 2, name: 'Narco'},
    {id: 3, name: 'Bombasto'},
    {id: 4, name: 'Celeritas'},
    {id: 5, name: 'Magneta'},
    {id: 6, name: 'RubberMan'},
    {id: 7, name: 'Dynama'},
    {id: 8, name: 'Dr IQ'},
    {id: 9, name: 'Magma'},
    {id: 10, name: 'Tornado'},
  ];
  filteredOptions: Observable<Hero[]>;

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  private _filter(name: string): Hero[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(user?: Hero): string | undefined {
    return user ? user.name : undefined;
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith<string | Hero>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
  }

}
