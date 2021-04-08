import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MenuItem } from 'src/app/models/MenuItem';



const TREE_DATA: MenuItem[] = [
  {
    id: 1,
    title: "فرم ها",
    path: "/",
    children: [{
      id: 1,
      title: "Template Driven",
      path: "/TemplateDriven"
    }, {
      id: 1,
      title: "Reactive Form",
      path: "/ReactiveForm"
    }, {
      id: 4,
      title: "Nested Form",
      path: "/NestedForm"
    }, {
      id: 1,
      title: "Dynamic Form ",
      path: "/DynamicForm"
    },]
  },
  {
    id: 3,
    title: "لیست ها",
    path: "",
    children: [{
      id: 1,
      title: "List With API",
      path: "/Lists",
    }]
  }
];



@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  treeControl = new NestedTreeControl<MenuItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuItem>();

  constructor() { this.dataSource.data = TREE_DATA; }

  ngOnInit(): void {
  }
  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;
}

