import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
  dynamicForm!: FormGroup;
  formTemplate = [
    {
      "type": "text",
      "label": "firstName",
      "name": "نام"
    },
    {
      "type": "email",
      "label": "email",
      "name": "ایمیل"
    }, {
      "type": "password",
      "label": "password",
      "name": "رمز ورود"
    },
    {
      "type": "select",
      "label": "gender",
      "name": "جنسیت",
      "options": ["زن", "مرد"]
    }
  ]


  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
    let group: any = {}
    this.formTemplate.forEach(input_template => {
      group[input_template.label] = new FormControl('', [Validators.required]);
    })
    this.dynamicForm = new FormGroup(group);
  }

  onSubmit(): void {
    this.toast.success("ذخیره انجام شد ...");
    console.log(this.dynamicForm.value);
  }
}
