import { Component, OnInit } from '@angular/core';
import { StudentDataService } from './student-data.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss'],
  providers: [StudentDataService]
})
export class StudentDataComponent implements OnInit {
  studentData: any =[];
  tableData: any =[];
  tableHeaders: string[] = [];
  sortType: string = 'RESET';
  constructor(private studentService: StudentDataService) { }

  ngOnInit(): void {
    this.studentService.getStudentData().subscribe((data: any)=>{
      // console.log(data);
      this.studentData = [...data];
      this.tableData = [...data]
      this.tableHeaders = Object.keys(this.studentData[0]);
    });
  }

  sortColumn(key: string) {
    if(this.sortType === 'RESET'){
      this.tableData.sort(this.compareData(key));
      this.sortType = 'ASC';
    }
    else if(this.sortType === 'ASC'){
      this.tableData.sort(this.compareData(key)).reverse();
      this.sortType = 'DESC';
    }
    else{
      this.tableData = [...this.studentData];
      this.sortType = 'RESET';
    }
  }

  compareData(key: string){
    return function(a: any, b: any){
      if ( a[key] < b[key] ){
        return -1;
      }
      if ( a[key] > b[key] ){
        return 1;
      }
      return 0;
    }
  }
}
