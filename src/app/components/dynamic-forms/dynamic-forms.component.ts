import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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


  constructor() { }

  ngOnInit(): void {
    let group: any = {}
    this.formTemplate.forEach(input_template => {
      group[input_template.label] = new FormControl('', [Validators.required]);
    })
    this.dynamicForm = new FormGroup(group);
  }

  onSubmit(): void {
    console.log(this.dynamicForm.value);
  }
}
