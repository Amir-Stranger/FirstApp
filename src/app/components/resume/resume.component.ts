
import { Component, OnInit } from '@angular/core';
import { type } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public list: type[] = [
    { text: 'HTML' },
    { text: 'CSS' },
    { text: 'JavaScript' },
    { text: 'Bootstrap' },
    { text: 'Jquery' },
    { text: 'TypeScript' },
    { text: 'Angular' },
    { text: 'WordPress' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
