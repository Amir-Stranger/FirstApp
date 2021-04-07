import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      "label": "firstName"
    },
    {
      "type": "text",
      "label": "lastName"
    },
    {
      "type": "select",
      "label": "gender",
      "options": ["Men", "Women"]
    }
  ]


  constructor() { }

  ngOnInit(): void {
    let group: any = {}
    this.formTemplate.forEach(input_template => {
      group[input_template.label] = new FormControl('');
    })
    this.dynamicForm = new FormGroup(group)
  }

  onSubmit(): void {
    console.log(this.dynamicForm.value);
  }
}
