import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-prueba',
  templateUrl: './images-dialog.component.html',
  styleUrls: ['./images-dialog.component.css']
})
export class ImagesDialogComponent implements OnInit {
lista = [];
imagesaa ='';
  constructor(public dialogRef: MatDialogRef<ImagesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.lista = this.data.listPictures;
      console.log(data);
     }

  ngOnInit(): void {
    //console.log(this.data.listPictures);
    
    console.log(this.lista);
  //  console.log(this.list.length);
  /*  
  this.imagesaa = this.list[0];
    if (this.list.length = 0) {
        console.log("0");
    }*/
  }
  

}
