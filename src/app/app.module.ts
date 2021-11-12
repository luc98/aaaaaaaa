import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from "./components/login-component/login-component.component";
import { PruebaComponent } from './components/prueba/prueba.component';
import {ProductsComponent } from './components/products-component/products-component.component';
//import {DataViewModule} from 'primeng/dataview';
//import { DataViewModule } from 'primeng/primeng';
//import { TabViewModule } from 'primeng/components/tabview/tabview';
//import { TableModule } from 'primeng/table';
//import { Table } from 'primeng/table';
//import {DataViewModule} from 'primeng/dataview';
//import { DataTableModule } from 'primeng/table';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
