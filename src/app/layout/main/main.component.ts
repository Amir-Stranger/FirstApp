import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isAuthenticate: boolean = false;
  userName: string | null = localStorage.getItem('name');

  constructor(private authService: AuthenticateService) { }

  ngOnInit(): void {
    this.isAuthenticate = this.authService.isauthenticate;
  }



}
