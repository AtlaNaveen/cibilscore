import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable()
export class CibilScore{

    cibilScore =0
    /**
     * @description  sets CibilScore for corressponding user (UID)
     * @returns null
     */
    getData()
    {
      const UserData =localStorage.getItem("UserData")
      if (UserData) {
        // Parse the string into an object
        const formGroupValue = JSON.parse(UserData);
        const salary = formGroupValue.salary
        const tax = formGroupValue.tax
        const emi = formGroupValue.emi
        const creditcards = formGroupValue.creditcards
        const creditlines = formGroupValue.creditlines
        const tenure = formGroupValue.tenure
        const remainingSalary = salary-tax-emi
        this.cibilScore = 0
        
        
        this.cibilScore += (salary > 50000 && salary < 200000) ? 150 :
                  (salary > 200000) ? 250 :
                  0;

this.cibilScore += (remainingSalary > salary * 0.75) ? 150 :
                  (remainingSalary > salary * 0.5) ? 100 :
                  0;

this.cibilScore += (creditcards > 1 && creditcards < 5) ? (50 * creditcards) :
                  (creditcards >= 5) ? 250 :
                  0;

this.cibilScore += (creditlines > 1 && creditlines < 5) ? (25 * creditlines) :
                  (creditlines >= 5) ? 150 :
                  0;

this.cibilScore += (tenure < 1) ? 50 :
                  (tenure >= 1) ? 25 :
                  0;

      }
      const UserId = JSON.parse(localStorage.getItem('user')!).uid

      localStorage.setItem(UserId,this.cibilScore.toString())
       return this.cibilScore 
    }
    
}