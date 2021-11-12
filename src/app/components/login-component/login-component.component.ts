import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {LoginService} from "../../services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  
                  //resultado = (condicion)?valor1:valor2;
   pruebaFrom = new FormGroup({
                  userName: new FormControl((localStorage.getItem('username')== null)? '': localStorage.getItem('username')),
                  password: new FormControl((localStorage.getItem('username')== null)? '': localStorage.getItem('password')),
                  rememberme:new FormControl((localStorage.getItem('username')== null)? '': localStorage.getItem('password'))
                });


  constructor(private loginServices:LoginService,
              private router:Router ) { 
                
              }

  ngOnInit(): void {
  }


   mostrar() {
   
  
  const { userName, password, rememberme} = this.pruebaFrom.value;
  console.log(userName);
  console.log(password);
  console.log(rememberme);

  
  this.loginServices.getLoginToken(userName, password).subscribe(data =>{
    //data;
    //const token2 = {...data}; 
    const {token} = data;
    //console.log(token);

    
    this.loginServices.settoken(token);
    //console.log(token);
    if (rememberme) {
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberme", rememberme);  
      localStorage.setItem("token", token);      
    }else{
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('rememberme');
    }
    
    this.goToproducts();
    
  });
 
  }
  
  goToproducts() {
    this.router.navigate(['products']);
  }

}
