import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-alta-productos-dialog',
  templateUrl: './alta-productos-dialog.component.html',
  styleUrls: ['./alta-productos-dialog.component.css'],
})
export class AltaProductosDialogComponent implements OnInit {
  myfile: any[] = [];
  filesUpdates: any[] = [];
  public porcentaje = 0;
  public finalizado = false;
  public progressBar: number = 50;
  public nombreArchivo = null;
  public showprogressbar: boolean = false;

  AltaProductosForm = new FormGroup({
    sku: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
  });

  constructor(
    private firebaseServices: FirebaseService,
    public dialogRef: MatDialogRef<AltaProductosDialogComponent>,
    private loginServices: LoginService
  ) {}

  ngOnInit(): void {}

  onBasicUpload(event: any) {
    //console.log(event.target.files[0]);
   // this.myfile.push(event.target.files[0]); anda bien, solo se sube un archivo a la vez

    const listafile =event.target.files;
    //console.log(event.target.files);
    //this.myfile = listafile;
    
      console.log(listafile.length);
      for (let index = 0; index < listafile.length; index++) {
        const element = listafile[index];
        this.myfile.push(element);
      }
    console.log(this.myfile);
   // this.myfile.push(listafile);
   
   // console.log(this.myfile);
   //  console.log(this.myfile);
    /***  nuevo*/
   // this.subirproductosActual(event.target.files[0]);
  }

  subir() {
    this.showprogressbar = true;
   // this.addproductToDataBase();
    this.subirProductosAnterior();
    /*
   this.myfile.forEach((xfile:any,index: number) => {
     //debugger;
     this.porcentaje =0;
     this.nombreArchivo = xfile.name;
     //const referencia = this.firebaseServices.referenciaCloudStorage(xfile.name);
     const referencia = this.firebaseServices.referenciaCloudStorage(xfile.name);
     let tarea = this.firebaseServices.tareaCloudStorage(xfile.name, xfile);
     //Cambia el porcentaje
     tarea.percentageChanges().subscribe((porcentaje) => {
       this.porcentaje = Math.round(porcentaje!);
       //console.log(this.porcentaje+"  -"+index);
       if (this.porcentaje == 100) {
         this.showprogressbar = true;
         console.log("se subio?");
         //console.log(referencia);
         
         referencia.getDownloadURL().subscribe((URL) => {
          //console.log(URL);
          this.filesUpdates.push(URL);
         });
       }
       
       
     });
     
     if (index == (this.myfile.length - 1)) {
       console.log("paso el ultimo"+index);
       console.log(this.filesUpdates); 
       this.addproductToDataBase();
     }
     

   });
   */
    //console.log(this.filesUpdates);  aparece solo uno de los archivos
  }
  mostrar() {
    console.log(this.filesUpdates);
  }
  public addproductToDataBase() {
    const { sku, code, name, description, price, currency } =
      this.AltaProductosForm.value;
    const data = {
      SKU: sku,
      code: code,
      name: name,
      description: description,
      pictures: this.filesUpdates,
      price: price,
      currency: currency,
      __v: 0,
    };
    console.log(data);

    this.loginServices.addProducts(data).subscribe(() => {
      console.log('se guardo?');
       const recarga = true
      this.dialogRef.close(recarga);
    },err =>{
      /*
      this.showprogressbar = false;
      this.dialogRef.close();
      */
    });
  }


  subirproductosActual(file:any){
    const archivoNuevo =file;
    const archivoname = file.name;
    console.log(archivoNuevo);
    const referencia =
      this.firebaseServices.referenciaCloudStorage(archivoname);
    let tarea = this.firebaseServices.tareaCloudStorage(
      archivoNuevo.name,
      archivoNuevo
    );

    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje!);
      //console.log(this.porcentaje+"  -"+index);
      if (this.porcentaje == 100) {
        //this.showprogressbar = true;
        console.log('se subio?');
        //console.log(referencia);

        referencia.getDownloadURL().subscribe((URL) => {
          //console.log(URL);
          this.filesUpdates.push(URL);
        });
      }
    });

    console.log(this.filesUpdates);
  }

  subirProductosAnterior(){
    this.myfile.forEach((xfile:any,index: number) => {
      //debugger;
      this.porcentaje =0;
      this.nombreArchivo = xfile.name;
      //const referencia = this.firebaseServices.referenciaCloudStorage(xfile.name);
      const referencia = this.firebaseServices.referenciaCloudStorage(xfile.name);
      let tarea = this.firebaseServices.tareaCloudStorage(xfile.name, xfile);
      //Cambia el porcentaje
      tarea.percentageChanges().subscribe((porcentaje) => {
        this.porcentaje = Math.round(porcentaje!);
        //console.log(this.porcentaje+"  -"+index);
        if (this.porcentaje == 100) {
          this.showprogressbar = true;
          console.log("se subio?");
          //console.log(referencia);
          
          referencia.getDownloadURL().subscribe((URL) => {
           //console.log(URL);
           this.filesUpdates.push(URL);
          });
        }
        
        
      });
      
      if (index == (this.myfile.length - 1)) {
        console.log("paso el ultimo"+index);
        console.log(this.filesUpdates); 
        const tiempodesubida = (1500*this.myfile.length)+2000;
        setTimeout(() =>{ 
          console.log(this.filesUpdates);
          this.addproductToDataBase();  
        }, tiempodesubida); //con 10 seg va bien
        
      }
      
 
    });
  }

  subirProductosPRUEBA(file?:any){
    this.myfile.forEach((xfile:any,index: number) => {
      //debugger;
      this.porcentaje =0;
      this.nombreArchivo = xfile.name;
      //const referencia = this.firebaseServices.referenciaCloudStorage(xfile.name);
      const referencia = this.firebaseServices.referenciaCloudStorage(xfile.name);
      let tarea = this.firebaseServices.tareaCloudStorage(xfile.name, xfile).then(()=>{
        referencia.getDownloadURL().subscribe((URL) => {
          //console.log(URL);
          this.filesUpdates.push(URL);
         });
      });

      //Cambia el porcentaje
      /*
      tarea.percentageChanges().subscribe((porcentaje) => {
        this.porcentaje = Math.round(porcentaje!);
        //console.log(this.porcentaje+"  -"+index);
        if (this.porcentaje == 100) {
          this.showprogressbar = true;
          console.log("se subio?");
          //console.log(referencia);
          
          
        }
        
        
      });
      */
      if (index == (this.myfile.length - 1)) {
        console.log("paso el ultimo"+index);
        console.log(this.filesUpdates); 
        setTimeout(() =>{ 
          console.log(this.filesUpdates);
          this.addproductToDataBase();  
        }, 2000); //con 10 seg va bien
        
      }
      
 
    });
  }
}
