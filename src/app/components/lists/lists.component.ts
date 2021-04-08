import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/categories';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  categoryWithHttpClient!: Category[];
  categoryWithService!: Category[];

  constructor(private httpClient: HttpClient, private service: CategoryService) { }

  ngOnInit(): void {
    const apiUrl = "http://apitester.ir/api/Categories";
    this.httpClient.get<Category[]>(apiUrl).subscribe(result => this.categoryWithHttpClient = result)

    this.service.getAll().subscribe(data => this.categoryWithService = data);

  }

}
