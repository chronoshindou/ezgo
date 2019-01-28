import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  animal: string;
  name: string;

  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router:Router, public dialog: MatDialog) {
    
    this.navLinks = [
      {
          label: 'Home',
          link: './dashboard',
          index: 0,
          icon: 'home'
      }, {
          label: 'Shop List',
          link: './shoplist',
          index: 1,
          icon: 'shopping_cart'
      }, {
          label: 'Loyalty',
          link: './loyalty',
          index: 2,
          icon: 'star_border'
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


}

@Component({
  selector: 'change-store',
  templateUrl: 'change-store.html',
  styleUrls: ['./footer.component.css']
})
export class ChangeStoreComponent {
  constructor(   public dialogRef: MatDialogRef<ChangeStoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
