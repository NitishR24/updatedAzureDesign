import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student.model';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/services/student.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})

export class StudentResultComponent implements OnInit {

  public Maths:number = 0;
  public Physics:number = 0;
  public Chemistry:number=0;
  public average:number=0;

Average(){
  this.studentService.studentData.chemistry = this.Chemistry;
  this.studentService.studentData.physics = this.Physics;
  this.studentService.studentData.math = this.Maths;
    this.average=(this.Maths+this.Physics+this.Chemistry)/3;
  }

  alert:boolean = false;

  constructor(public studentService : StudentService) {}

  ngOnInit():void{}

  onSubmit(myForm:NgForm){
    this.alert=true;
    this.studentService.addStudent().subscribe({
      next:(data)=>{ },
      complete:()=>{console.log("Successfully added the details. You will shortly receive an email.");},
      error:(err)=>{console.log("Unable to Create New User"+err);}
      })
  }
    }


