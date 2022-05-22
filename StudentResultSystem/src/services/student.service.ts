import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http:HttpClient){}
      studentData:student=new student();
      readonly baseUrl = 'https://localhost:44348/api/Storage/UpdateAzureBlob';

      addStudent()
      {
         return this.http.post(this.baseUrl,this.studentData);
      }

}
