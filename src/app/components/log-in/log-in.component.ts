import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

import { User } from '../../models/log-in-user.model';

@Component({
  selector: 'log-in-form',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  model = new User('marylychee','123');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  loginUser() {
    this.model = new User('','')
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
