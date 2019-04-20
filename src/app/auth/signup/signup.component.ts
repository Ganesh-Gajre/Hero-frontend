import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  userForm = new FormGroup({
    'firstName': new FormControl(null),
    'lastName': new FormControl(null),
    'gender': new FormControl(null),
    'email': new FormControl(null),
    'mobileNumber': new FormControl(null),
    'dateOfBirth': new FormControl(null),
    'password': new FormControl(null),
    'confirmPassword': new FormControl(null)
  })

  ngOnInit() {
  }

  onSubmit(){

    
  }

}
