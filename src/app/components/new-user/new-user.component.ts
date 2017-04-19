import { Component, OnInit } from '@angular/core';

import { User } from '../../models/new-user.model'

@Component({
  selector: 'sign-up-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})


export class NewUserComponent {

  model = new User('Billy','Jones','yaya@gmail.com','123');

  submitted = false;

  onSubmit() { this.submitted = true };

  get diagnostic() { return JSON.stringify(this.model); }

  createUser() {
    this.model = new User('','','','')
  }
}


// {
//   "id": 23,
//   "first_name": "Mary",
//   "last_name": "Lai",
//   "email": "marylychee@gmail.com",
//   "is_super_user": false,
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJpYXQiOjE0OTI1NDk4NzMsImV4cCI6MTQ5MzE1NDY3M30.hdO_9N-ittRRGZX9GCjtoWjc2RAdAroI4B4UK2-zeJM"
// }
