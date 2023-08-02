import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-cibil-score',
  templateUrl: './cibil-score.component.html',
  styleUrls: ['./cibil-score.component.scss']
})
export class CibilScoreComponent implements OnInit {
  flag: boolean;
score : string;
  constructor(public authService: AuthService,private router:Router) { }

  ngOnInit(): void {

    const UserId = JSON.parse(localStorage.getItem('user')!).uid
    console.log(UserId)
    // console.log(localStorage.getItem(UserId))
     this.score = localStorage.getItem(UserId)
    this.flag = false
    if(this.score != null)
    {
      this.flag = true
    }
  }
  Home()
  {
      this.router.navigate(['dashboard'])
  }
}
