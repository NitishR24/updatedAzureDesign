import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student.model';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})

export class StudentResultComponent implements OnInit {

  constructor(public studentService : StudentService) {}

  ngOnInit():void{
  }
  onSubmit(myForm:NgForm){
    this.studentService.addStudent().subscribe({
      next:(data)=>{ },
      complete:()=>{console.log("Successfully added the details. You will shortly receive an email.");},
      error:(err)=>{console.log("Unable to Create New User"+err);}
      })
  }
    }


