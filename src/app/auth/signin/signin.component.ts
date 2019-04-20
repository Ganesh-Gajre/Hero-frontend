import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  constructor() { }

  signInForm = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  })


  ngOnInit() {
  }

  onSignIn() {
    
  }


}
