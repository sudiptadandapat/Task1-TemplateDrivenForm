import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  genders =['Male','Female']

  submitted=false;
  entryArray=[];

  user={
    name:'',
    email:'',
    gender:'',
    phoneNo:0
    
  }

  onSubmit(){
    this.submitted=true;
    this.user.name=this.signupForm.value.name;
    this.user.email=this.signupForm.value.email;
    this.user.gender=this.signupForm.value.gender;
    this.user.phoneNo=this.signupForm.value.phoneNo;
    console.log(this.user);
    this.entryArray.push(this.user);
    
  }

  onReset(){
    this.signupForm.reset();
  }
}
