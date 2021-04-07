import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() sideNavToggle = new EventEmitter();

  toggle() {
    this.sideNavToggle.emit();
  }

}
