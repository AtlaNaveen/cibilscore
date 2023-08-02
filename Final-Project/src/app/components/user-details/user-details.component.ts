// import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { validateEventsArray } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CustomValidators } from 'src/app/utilities/custom-validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  UserId :any
  user_salary : number ;
  
  ngOnInit(): void {
     this.UserId = JSON.parse(localStorage.getItem('user')!).uid
    const UserDetails = JSON.parse(localStorage.getItem(this.UserId+"UserFinancialDetails"))
    this.user_salary = UserDetails.salary
   
  }
  regForm: FormGroup;

  minSalary = 30000;
  

  constructor(private frmBuilder: FormBuilder,private router:Router) {
    this.regForm = this.frmBuilder.group({
    
      salary: ['',[Validators.required, Validators.min(this.minSalary)]],
      Tax : ['',[Validators.required, Validators.max(this.minSalary)]],
      
      emioption:['',[Validators.required]],
      emi:[''],
      creditcards : ['',[Validators.required]],
      lineups: [''],
      tenure: [''],
      
      acceptTerms: ['', Validators.requiredTrue]
    });
  }
flag = false
  logForm() {
    console.log(this.regForm);
    if (this.regForm.valid){
      console.log(this.regForm.value);
      const formGroupString = JSON.stringify(this.regForm.value);
      console.log(formGroupString)
      localStorage.setItem(this.UserId+"UserFinancialDetails",formGroupString)
      this.router.navigate(['\app-hi-chart'])
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


  ShowMsg(){
   Swal.fire({
  html: '<small><ul style="list-style:none;"><li class="item4">Agree if you really want loan.</li><li class="item4">Agree if you think you can repay loan.</li></ul></small>',
  showCloseButton: true
});

  }
}
