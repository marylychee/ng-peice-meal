import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  model = new User('Billy','Jones','yaya@gmail.com','123');

  submitted = false;

  onSubmit() { this.submitted = true };

  get diagnostic() { return JSON.stringify(this.model); }

  createUser() {
    this.model = new User('','','','')
  }
}
