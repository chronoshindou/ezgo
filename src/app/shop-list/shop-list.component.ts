import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { Hero } from '../hero';
import { List } from '../shoplist';
import { HeroService } from '../hero.service';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  heroes: Hero[];
  lists: List[];
  foodControl = new FormControl();
  foods: Food[] = [
    {value: 'big', viewValue: 'B.I.G.'},
    {value: 'village', viewValue: 'Village Grocer'},
    // {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.getHeroes();
    this.getList();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getList(): void {
    this.heroService.getList()
    .subscribe(lists => this.lists = lists);
  }



  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(list: List): void {
    this.lists = this.lists.filter(h => h !== list);
    this.heroService.deleteHero(list).subscribe();
  }

  goStore(food:string) {
    let food_ = food;
    if (food_ == 'big') {
      return '/shopstore'
    }
    else if (food_ == 'village') {
      return '/shopstore2'
    }
  }


}
