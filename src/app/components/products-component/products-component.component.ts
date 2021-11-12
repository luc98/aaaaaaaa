import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponent implements OnInit {

  list: any;
  loading = false;
  constructor(private loginServices: LoginService) {

   }

  ngOnInit(): void {
    
    this.loginServices.getProducts().subscribe(data => {
      //console.log(data);
      this.list = data;
      this.loading = true;
    console.log(this.list[0].description);
    })
  }

  consola(){
    console.log("si");
  }

}
