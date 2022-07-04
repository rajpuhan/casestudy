import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  numbers: number[];
  isGridView: boolean = true;
  filterItems: string[]=['Price'];
  filterItem!: string;
  constructor() { 
    this.numbers = Array(40).fill(1).map((x,i)=>i);
  }

  ngOnInit(): void {
  }
  showGridView(): void{
    this.isGridView = true;
  }
  hideGridView(): void{
    this.isGridView = false;
  }
}
