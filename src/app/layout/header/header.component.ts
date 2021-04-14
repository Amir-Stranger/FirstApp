import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  @Output() sideNavToggle = new EventEmitter();

  toggle() {
    this.sideNavToggle.emit();
  }

  showLoader(): void {
    this.ngxService.startBackground();
    setTimeout(() => {
      this.ngxService.stopBackground();
    }, 1000);
  }

}
