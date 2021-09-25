import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  click : boolean = false;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.click = !this.click;
    console.log('test');
  }

  homepro(){
    this.router.navigateByUrl('/homepro')
  }

}

