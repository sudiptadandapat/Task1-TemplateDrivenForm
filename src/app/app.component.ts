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
    phoneNo:0,
    time:''
    
  }

  onSubmit(){
    this.submitted=true;
    this.user = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      gender: this.signupForm.value.gender,
      phoneNo: this.signupForm.value.phoneNo,
      time: new Date().toLocaleString()

    }
    // console.log(this.user);
    this.entryArray.push(this.user);
    // console.log(this.entryArray);
    this.signupForm.reset();
    
  }

  onReset(){
    this.signupForm.reset();
  }
}
