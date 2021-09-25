import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    // private router : Routes
    // private routes : Routes,
    // private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  submit(){
    // this.router.navigateByUrl('/login')
  }

}
