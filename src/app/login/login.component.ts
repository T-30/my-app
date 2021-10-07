import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatalogService } from '../datalog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public input: any;
  // user = [
  //   {username:"test123",password:"1234"},
  //   {username:"test11",password:"123"},
  // ];

  constructor(
    private router : Router,
    // private http : HttpClient,
    private datauser : DatalogService
  ) {
    // this.input={
    //   'username' : '',
    //   'password' : ''
    // }

    // console.log(this.user[0]);
   }

  ngOnInit(): void {
  }

  login(){
    console.log('pass');
    // this.http.post
    // this.router.navigateByUrl('/home')
  }

  regis(){
    this.router.navigateByUrl('/register')
  }

  showName(){
    
    this.datauser.user = [
        {username:"test123",password:"1234",name:"tesr"},
        {username:"test11",password:"123",name:"tesjdfk"},
      ];
      console.log('succeed'+JSON.stringify(this.datauser.user[0]));
      this.router.navigateByUrl('/home')
  }

  // public loginn() {
  //   if (this.input.email && this.input.password) {
  //     let headers = new HttpHeaders({ 'content-type': 'application/json' });
  //     this.http.post('http://localhost:4200/login', JSON.stringify(this.input), { headers: headers })
  //       .subscribe(result => 
  //         this.router.navigate(['/home'], { 'queryParams': result })
  //       );
  //   }
  // }

}
