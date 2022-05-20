import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentData : student = new student();
  constructor(private http:HttpClient) { }
  baseUrl:string = "";

  addStudent()
  {
    return this.http.get<student>(this.baseUrl+"Student Details");
  }
}
