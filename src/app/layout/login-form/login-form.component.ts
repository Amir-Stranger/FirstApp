import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide = true;

  constructor(private _formbuilder: FormBuilder, private authservice: AuthenticateService) { }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this._formbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(data: string): void {
    console.log(data);
    this.authservice.login(data).subscribe(result => {
      localStorage.setItem('token', result.token);
      localStorage.setItem('name', result.firstName);
      window.location.reload();
    })
  }

}
