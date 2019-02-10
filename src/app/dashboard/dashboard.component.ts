import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Promotion } from '../promotion';
import { HeroService } from '../hero.service';
import {MatSnackBar,MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ChangeStoreComponent} from '../shared/footer/footer.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Post {
  title: string;
  post_content: string;
  who: string;
  when?: Date;
  comments?: any;
  imageUrl?: string;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  promos: Promotion[] = [];
  post: Post[] = [];

  animal: string;
  name: string;

  mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
mySlideOptions={items: 3, dots: false, nav: true, autoPlay: true, loop: false,center: false,rewind:true,autoplay:true,autoplaySpeed: 10,slideTransition: "linear"};
// myCarouselOptions={items: 3, dots: true, nav: true};

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
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  // customOptions: any = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

  constructor(
    private heroService: HeroService,
    public snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog) { }

  ngOnInit() {
    // this.getHeroes();
    this.getPromos();
    this.getPost();
    // this.openBottomSheet();

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith<string | Hero>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
  }

  private _filter(name: string): Hero[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(user?: Hero): string | undefined {
    return user ? user.name : undefined;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getPost(): void {
    this.heroService.getPost()
      .subscribe(post => this.post);
              // .subscribe(post=> this.post = post.slice(1, 5));
      console.log("getPost : "+this.post)
  }

  getPromos(): void {
    this.heroService.getPromos()
    .subscribe(promos => this.promos = promos.slice(1,5));
    console.log("getPromos : "+this.promos)

  }

  addList(promo: Promotion){
    let snackBarRef = this.snackBar.open('Added to shop list', 'Ok');
    this.heroService.addList(promo).subscribe();

  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ChangeStoreComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  addFav(promo:Promotion) {
      console.log("Before : ",promo.favourite)
      let favourite = promo.favourite;
      promo.favourite = !favourite;
      console.log("After : ",promo.favourite)
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}