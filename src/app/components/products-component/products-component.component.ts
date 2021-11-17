import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImagesDialogComponent } from '../dialog/imagesDialogComponent/images-dialog.component';
import { AltaProductosDialogComponent } from '../dialog/altaProductosDialog/alta-productos-dialog.component';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponent implements OnInit {

  list: any;
  public loadingg= true;
  displayModal: boolean | undefined;

  constructor(private loginServices: LoginService,
              public dialog: MatDialog) {

   }

  ngOnInit(): void {
    //this.loadingg = false;
   
  }

  getProducts(){
    this.loadingg= true;
    this.loginServices.getProducts().subscribe(data => {
      //console.log(data);
    //  console.log("pasa");
    //console.log(this.list[0].description);
    this.list = data;
      this.loadingg = false;
    },err => console.log(err))
  }


  showdialog(listPictures:any){
    //console.log(listPictures);
      const dialogRef = this.dialog.open(ImagesDialogComponent, {
      width: '600px',
      height: '550px',
      data:{listPictures}
    });
  }

  howdialog(){
   // console.log(listPictures);
      const dialogRef = this.dialog.open(AltaProductosDialogComponent, {
      width: '600px',
      height: '650px'}).afterClosed().subscribe( result =>{
        console.log(result);
        if (result) {
          this.getProducts();
        }

      });;
  }

}
