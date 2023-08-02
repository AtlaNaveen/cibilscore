import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-show-user-details',
  templateUrl: './show-user-details.component.html',
  styleUrls: ['./show-user-details.component.scss']
})
export class ShowUserDetailsComponent {
  user_firstName : string 
  user_lastName: string 
  user_gender: string
  user_age: number
  user_address: string
  user_zip:string
  flag : boolean
  constructor(public authService: AuthService)
  {

  }
  ngOnInit(): void {
   
    const UserId = JSON.parse(localStorage.getItem('user')!).uid
    const UserDetails = JSON.parse(localStorage.getItem(UserId+"UserProfileDetails"))
    this.user_firstName = UserDetails && UserDetails?.firstname ? UserDetails.firstname : "";    
    this.user_lastName = UserDetails?.lastname
    this.user_gender = UserDetails?.gender
    this.user_age = UserDetails?.age
    this.user_address = UserDetails?.address?.fulladdress 
    this.user_zip = UserDetails?.address?.zip
    this.flag = false
    if( this.user_firstName == "")
    {
      this.flag = true
    }
    else{
      this.flag = false
    }
    
    }
}
