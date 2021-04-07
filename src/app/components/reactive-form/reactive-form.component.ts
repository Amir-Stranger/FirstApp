import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      code: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
    })
  }

  save() {
    if (this.reactiveForm.invalid) {
      this.toastr.error("Invalid Form");
      return
    }
    console.log(this.reactiveForm.value);
    this.toastr.success("...Saved Form Succesfull")
  }

}
