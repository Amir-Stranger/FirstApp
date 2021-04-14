import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.scss']
})
export class SiteInfoComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

}
