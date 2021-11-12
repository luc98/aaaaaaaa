import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component.component';
import { ProductsComponent } from './components/products-component/products-component.component';


const routes: Routes = [
  {
    
    path: 'products', component: ProductsComponent
  },
  {
    
    path: '', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }