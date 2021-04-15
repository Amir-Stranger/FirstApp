import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { interval, timer } from 'rxjs';
import { Category } from 'src/app/models/categories';
import { Products } from 'src/app/models/Products';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  categoryWithHttpClient!: Category[];
  categoryWithService!: Category[];
  productList!: Products[];
  isLoading = localStorage.getItem('load');

  constructor(private httpClient: HttpClient, private service: CategoryService, private productService: ProductsService, private uiLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    const apiUrl = "http://apitester.ir/api/Categories";
    this.httpClient.get<Category[]>(apiUrl).subscribe(result => this.categoryWithHttpClient = result)
    this.service.getAll().subscribe(data => this.categoryWithService = data);
    this.productService.getAll().subscribe(result => {
      this.productList = result;
      localStorage.setItem('load', "loaded");
      this.loader();
    });
  }


  loader() {
    if (this.isLoading != null) {
      this.uiLoader.stop();
    } else {
      this.uiLoader.start();
      setTimeout(() => {
        this.uiLoader.stop();
      }, 1000);
    }
  }
}
