import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss'],
})

export class SignUpComponent implements OnInit {

  useremail =false;
  passworderr = false;
  confirmpassworderr = false;
  matchpassword = false
  flag = false

  constructor(public authService: AuthService) {}
  ValidationCheck = (userName,password,confirmpassword)=>{ 
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userName)) {
      console.log("Correct format")
      this.useremail = true; // Set the error flag or show an error message
      return;
    }
    else{
      this.useremail = false
    }
    if(!password){ 
      this.passworderr = true;
      return 
    }
    else{
      this.passworderr = false
    }
    if(!confirmpassword){ 
      this.confirmpassworderr = true;
      return 
    }
    else{
      this.confirmpassworderr = false
    }
    if(password != confirmpassword)
    {
      this.matchpassword = true
    }
    else{
      this.matchpassword = false
      this.flag = true
    }
    
    if(this.flag)
    {
      console.log("Calling signup")
      this.authService.SignUp(userName, password)
    }
   
  }
  ngOnInit() {}
}
