import {
  Component,
  OnInit
} from '@angular/core';

import {
  Hero
} from '../hero';
import {
  List
} from '../shoplist';
import {
  Promotion
} from '../promotion';
import {
  HeroService
} from '../hero.service';
import {
  MatSnackBar
} from '@angular/material';

import {
  FormControl
} from '@angular/forms';
import {
  Observable
} from 'rxjs';
import {
  map,
  startWith
} from 'rxjs/operators';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  lists: List[];
  promos: Promotion[];
  myControl = new FormControl();
  options: Hero[] = [{
      id: 1,
      name: 'Illy Coffee 500g'
    },
    {
      id: 2,
      name: 'Narco'
    },
    {
      id: 3,
      name: 'Bombasto'
    },
    {
      id: 4,
      name: 'Celeritas'
    },
    {
      id: 5,
      name: 'Magneta'
    },
    {
      id: 6,
      name: 'RubberMan'
    },
    {
      id: 7,
      name: 'Dynama'
    },
    {
      id: 8,
      name: 'Dr IQ'
    },
    {
      id: 9,
      name: 'Magma'
    },
    {
      id: 10,
      name: 'Tornado'
    },
  ];

  filteredOptions: Observable < Hero[] > ;
  showType: string = "grid";
  iconView: string = "grid_on"; //view_list

  constructor(private heroService: HeroService,
    public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getHeroes();
    console.log(this.showType);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith < string | Hero > (''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  private _filter(name: string): Hero[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(user ? : Hero): string | undefined {
    return user ? user.name : undefined;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }




  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });

  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  addList(hero: Hero): void {
    //this.heroes = this.heroes.filter(h => h !== hero);

    /*const lists = [...this.lists];
    lists.push(hero);
    this.lists = lists;
    */
    let snackBarRef = this.snackBar.open('Added to shop list', 'Ok');
    //  this.snackBar.openFromComponent(PizzaPartyComponent, {
    //   duration: 500,
    // });
    this.heroService.addList(hero).subscribe();
    // this.heroService.addList(hero).subscribe(hero => {
    //   this.lists.push(hero);
    // });
  }

  addFav(hero: Promotion) {
    console.log("Before : ", hero.favourite)
    let favourite = hero.favourite;
    hero.favourite = !favourite;
    console.log("After : ", hero.favourite)
    // let snackBarRef = this.snackBar.open('Added to favourite list', 'Ok');

  }

  toggleView(showType){
    if(showType=='grid'){
      this.showType = 'list';
      this.iconView = 'grid_on';
    }
    else if(showType=='list') {
      this.showType = 'grid';
      this.iconView = 'view_list';
    }

  }




}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party">
  Pizza party!!!
</span>`,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
