import { Component, OnInit } from '@angular/core';
import { KeyValue } from 'src/app/models/KeyValue';
import { FormItem } from 'src/app/models/TemplateDriven';
import { GenderService } from 'src/app/services/gender.service';
import { GradeService } from 'src/app/services/grade.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  grades: KeyValue[] | undefined;
  gender: KeyValue[] | undefined;
  form: FormItem = new FormItem(0, "", "", "", 0, "", 0, "");

  constructor(private gradeService: GradeService, private genderService: GenderService) { }

  ngOnInit(): void {
    this.gender = this.genderService.getAll();
    this.grades = this.gradeService.getAll();
  }

  save(value: FormItem) {
    this.form = value;
    this.form.gradeTitle = this.grades?.find(q => q.id == this.form.gradeId)?.title || '';
    this.form.genderTitle = this.gender?.find(q => q.id == this.form.genderId)?.title || '';

    console.log(value);
  }
}
