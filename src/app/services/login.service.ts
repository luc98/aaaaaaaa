import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface OrderResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url = "http://churrasco.uk.to:3005/login";
  public token: any;
  public user:any;
  public pass:any;
  public urlProducts="http://churrasco.uk.to:3005/products";
  public urladdProducts=  "http://churrasco.uk.to:3005/addproduct"; // "http://localhost:3000/addproduct";//

  constructor(private http: HttpClient,
              private router:Router) {

   }

   getLoginToken(user:string, pass: string){
      this.setuser(user,pass);
    return this.http.post<OrderResponse>(this.url,{
      "username": user,// "challenge",  
      "password":  pass// "ch411enge"
     });

    
   }
   getProducts(){    
     
      return this.http.get(this.urlProducts,{
        headers: {Authorization: 'Bearer '+ localStorage.getItem("token")}
      })  
   }
   
   public settoken(v : string) {
     this.token = v;
    // console.log("setToken: "+this.token);
   }
   public setuser(user:string,pass:string) {
    this.user =user;
    this.pass = pass;
  }

   public addProducts(data:any){
    const headers = {Authorization: 'Bearer '+ localStorage.getItem("token")}
    const body = {
      "SKU": data.SKU,
        "code": data.code,
        "name": data.name,
        "description": data.description,
        "pictures": data.pictures,
        "price": data.price,
        "currency": data.currency,
        "__v": 0
     }
    return this.http.post(this.urladdProducts, body, { headers });
   }
   /*
   curl --location --request POST 'http://localhost:3000/addproduct' \
   --header 'Authorization: Bearer <token>' \
   --header 'Content-Type: application/json' \
   --data-raw '{
        "SKU": "2342232",
        "code": 1203,
        "name": "Manzana Verde",
        "description": "Cajón Manzana verde - 20kg",
        "pictures": [
            "http://placekitten.com/200/200"
        ],
        "price": 92,
        "currency": ".s/",
        "__v": 0
    }'

   */
    
}
