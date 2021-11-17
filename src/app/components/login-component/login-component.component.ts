import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  
  
  msgs: Message[] = [];
  loginForm = new FormGroup({
    userName: new FormControl(
      localStorage.getItem('username') == null
        ? ''
        : localStorage.getItem('username')
    ),
    password: new FormControl(
      localStorage.getItem('username') == null
        ? ''
        : localStorage.getItem('password')
    ),
    rememberme: new FormControl(
      localStorage.getItem('username') == null
        ? ''
        : localStorage.getItem('password')
    ),
  });

  constructor(private loginServices: LoginService,
              private router: Router,
              private messageService: MessageService) {}

  ngOnInit(): void {}

  mostrar() {
    const { userName, password, rememberme } = this.loginForm.value;
    console.log(userName);
    console.log(password);
    console.log(rememberme);

    this.loginServices.getLoginToken(userName, password).subscribe(
      (data) => {
        //data;
        //const token2 = {...data};
        const { token } = data;
        //console.log(token);

        //this.loginServices.settoken(token);
        localStorage.setItem('token', token);
        //console.log(token);
        if (rememberme) {
          localStorage.setItem('username', userName);
          localStorage.setItem('password', password);
          localStorage.setItem('rememberme', rememberme);
          //localStorage.setItem('token', token);
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.removeItem('rememberme');
          //localStorage.removeItem('token');
        }


        this.goToproducts();
      },
      (err) => {
        console.log(err.message);
        this.messageService.add({severity:'error', summary:'Login Failed:', detail:' Your user ID or password is incorrect'});
      }
    );
  }

  goToproducts() {
    this.router.navigate(['products']);
  }
}
