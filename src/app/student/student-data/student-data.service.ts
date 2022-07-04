import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentDataService {

  constructor(private httpClientService: HttpClient) { }
  getStudentData() {
    return this.httpClientService.get('assets/json/student.json');
  }
}
