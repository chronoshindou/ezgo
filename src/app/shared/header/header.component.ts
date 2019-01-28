import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {ChangeStoreComponent} from '../footer/footer.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

export interface navLinks {
  label: string;
  link: string;
  index: number;
  icon: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  animal: string;
  name: string;

  navLinks: navLinks[];
  activeLinkIndex = -1; 
  constructor(private router:Router, public dialog:MatDialog) {
    this.navLinks = [
      {
          label: 'Home',
          link: './dashboard',
          index: 0,
          icon: 'home',
      }, {
          label: 'Shop List',
          link: './shoplist',
          index: 1,
          icon: 'shopping_cart',
      }, {
          label: 'Loyalty',
          link: './loyalty',
          index: 2,
          icon: 'star_border',
      }, {
        label: 'Change Store',
        link: './dashboard',
          index: 3,
          icon: 'store'
      },
  ];
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
  ngOnInit():void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  changeStore(link:navLinks) {
    console.log(link.index)
    if(link.index==3){
      this.openDialog();
    }
    else return;
  }
}
