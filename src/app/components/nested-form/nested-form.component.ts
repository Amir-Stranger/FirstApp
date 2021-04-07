import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  nestedForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastR: ToastrService) { }


  ngOnInit(): void {
    this.nestedForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      bankAccount: this.fb.group({
        accountType: ['', Validators.required],
        accountNumber: ['', Validators.required],
      }),
      contactInfo: this.fb.group({
        tel: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      addressList: this.fb.array([
        this.initAddressForm()
      ])
    })
  }

  get contactInfo(): any {
    return this.nestedForm.get("contactInfo");
  }
  get bankAccount(): any {
    return this.nestedForm.get("bankAccount");
  }
  get addressList(): FormArray {
    return this.nestedForm.get("addressList") as FormArray;
  }

  initAddressForm(): FormGroup {
    return this.fb.group({
      type: [''],
      address: ['']
    })
  }
  addAddress(event: any) {
    event.preventDefault();
    this.addressList.push(this.initAddressForm());
  }
  removeAddress(event: any, index: any) {
    event.preventDefault();
    this.addressList.removeAt(index);
  }


  save() {
    if (this.nestedForm.invalid) {
      this.toastR.error("بعضی از فیلدها خالی است", "Error")
      return
    }
    this.toastR.success("ثبت با موفقیت انجام شد")
    console.log(this.nestedForm.value);
  }




}
