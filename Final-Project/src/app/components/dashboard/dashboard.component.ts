import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}

  flag = false
  score : string
  ngOnInit(): void {
    const UserId = JSON.parse(localStorage.getItem('user')!).uid
    this.score = localStorage.getItem(UserId)
    this.flag = false
    if(this.score != null)
    {
      this.flag = true
    }
  }
  
}
