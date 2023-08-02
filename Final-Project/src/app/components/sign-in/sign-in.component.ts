import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {
  
  regForm: FormGroup;
  useremail =false;
  passworderr = false;
  get frm() { return this.regForm.controls; }
  

  constructor(public authService: AuthService,private location: Location,private router:Router) {
  
  }
  ngOnInit() {     window.addEventListener('popstate', this.preventBackButtonNavigation);

}
ngOnDestroy() {
  window.removeEventListener('popstate', this.preventBackButtonNavigation);
}
preventBackButtonNavigation = () => {
this.router.navigate(['app-sign-in'])
  // this.location.forward();
};
  ValidationCheck = (userName,password)=>{ 
    
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
    const x = this.authService.SignIn(userName, password)
    console.log(x)
  }

  showToast()
  {

  }
}
