import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/utilities/custom-validators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  user_firstName : string 
  user_lastName: string 
  user_gender: string
  user_age: number
  user_country : string
  user_address: string
  user_city : string
  user_zip:string
  constructor(private frmBuilder: FormBuilder,private router:Router) {
    this.regForm = this.frmBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(6)
      ])],
      gender: ['', Validators.required],
    
      age: ['', [
        Validators.required,
        CustomValidators.ageRange(this.minAge, this.maxAge)
      ]],
      
      address: this.frmBuilder.group({
        country: ['', Validators.required],
        city: ["", Validators.required],
        zip: ["", Validators.required],
        fulladdress: ['', Validators.required]
      }),
    });
  }
  ngOnInit(): void {
    const UserId = JSON.parse(localStorage.getItem('user')!).uid
    const UserDetails = JSON.parse(localStorage.getItem(UserId+"UserProfileDetails"))
    console.log(UserDetails)
    this.user_firstName = UserDetails && UserDetails?.firstname ? UserDetails.firstname : "";    
    this.user_lastName = UserDetails?.lastname
    this.user_gender = UserDetails?.gender
    this.user_age = UserDetails?.age
    this.user_city = UserDetails?.address?.city
    this.user_country = UserDetails?.address?.country
    this.user_address = UserDetails?.address?.fulladdress 
    this.user_zip = UserDetails?.address?.zip
   
  }
  regForm: FormGroup;

  countries = [
    { 'id': "", 'name': 'Select Country' },
    { 'id': 1, 'name': 'India' },
    { 'id': 2, 'name': 'USA' },
    { 'id': 3, 'name': 'UK' }
  ];

  minAge = 20;
  maxAge = 60;
  

 
flag = false
  logForm() {
    console.log(this.regForm);
    if (this.regForm.valid){
      console.log(this.regForm.value);
      const formGroupString = JSON.stringify(this.regForm.value);
      const UserId = JSON.parse(localStorage.getItem('user')!).uid
      localStorage.setItem(UserId+"UserProfileDetails",formGroupString)
     this.router.navigate(['app-show-user-details'])
    }
    else {
      console.error("Invalid Form...");
      this.regForm.markAllAsTouched();
    }
  }

  reset() {
    this.regForm.reset();
  }

  get frm() { return this.regForm.controls; }
  get address() { return (this.regForm.controls['address'] as FormGroup).controls; }
  }


