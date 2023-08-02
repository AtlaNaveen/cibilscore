import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',  
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {


  ngOnInit(): void {
   
  const UserId = JSON.parse(localStorage.getItem('user')!).uid
  console.log(UserId) 
  console.log(localStorage.getItem(UserId))
  const fname = JSON.parse(localStorage.getItem(UserId+"UserProfileDetails")).firstname
  console.log(fname)
  }
  constructor(public authService: AuthService,private router:Router) {}

}
