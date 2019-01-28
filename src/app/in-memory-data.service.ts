import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { List } from './shoplist';
import { Promotion } from './promotion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Illy Coffee 500g', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg' },
      { id: 2, name: 'Narco', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg' },
      { id: 3, name: 'Bombasto', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg' },
      { id: 4, name: 'Celeritas', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg' },
      { id: 5, name: 'Magneta', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg' },
      { id: 6, name: 'RubberMan', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10 , imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg'},
      { id: 7, name: 'Dynama', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: '' },
      { id: 8, name: 'Dr IQ', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: '' },
      { id: 9, name: 'Magma', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: '' },
      { id: 10, name: 'Tornado', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: '' }
        ];
        //https://images-na.ssl-images-amazon.com/images/I/41t2fIYgo8L.jpg
    const lists = [
      { id: 11, name: 'Mr. Nice', location: 'B.I.G.', isle: 'A', rack: 'A1', shelf: '5', price: 10, imageUrl: ''},
        ];
    const promos = [
      {   id: 1, name: 'Illy Coffee 500g', location: 'B.I.G', price: 25, discount: 15 , imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg',favourite: true},
      {   id: 2, name: 'Illy Coffee 500g', location: 'B.I.G', price: 25, discount: 15 , imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg',favourite: false},
      {   id: 3, name: 'Illy Coffee 500g', location: 'B.I.G', price: 25, discount: 15 , imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg',favourite: true},
      {   id: 4, name: 'Illy Coffee 500g', location: 'B.I.G', price: 25, discount: 15 , imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg',favourite: false},
      {   id: 5, name: 'Illy Coffee 500g', location: 'B.I.G', price: 25, discount: 15 , imageUrl: 'http://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0323/img51c.jpg',favourite: true}
        ];
    return {heroes,lists,promos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  
  /*genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  */
 genId<T extends Hero | List | Promotion>(myTable: T[]): number {
   return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
 }
}
