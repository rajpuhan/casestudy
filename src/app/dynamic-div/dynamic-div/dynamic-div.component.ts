import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {
  rows: number[] = [];
  cells: number[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let index = 1; index <= 50; index++) {
      this.rows.push(index);
    }
    for (let index = 0; index < 200; index++) {
      this.cells.push(index);
    }
  }
  showMessage(rowId: number, cellId: number): void{
    let cellNum = (200*rowId)+cellId+1;
    alert(`Div "${cellNum}" is clicked`);
  }
  
  addCell(event: any): void {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      for (let index = 1; index <= 10; index++) {
        this.rows.push(index);
      }
    }
    
  }
}
