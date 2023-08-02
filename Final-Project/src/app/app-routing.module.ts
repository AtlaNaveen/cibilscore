import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CibilScoreComponent } from './components/cibil-score/cibil-score.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ApiData } from './shared/services/apidata';
// import { ApiDataComponent } from './components/api-data/api-data.component';
import { TestingComponent } from './components/testing/testing.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HiChartComponent } from './components/hi-chart/hi-chart.component';
import { LoanPageComponent } from './components/loan-page/loan-page.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ShowUserDetailsComponent } from './components/show-user-details/show-user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
  { path: 'app-cibil-score1', component: CibilScoreComponent , canActivate:[AuthGuard]},
  { path: 'app-user-details', component: UserDetailsComponent , canActivate:[AuthGuard]},
  // { path: 'app-api-data', component: ApiDataComponent , canActivate:[AuthGuard]},
  { path: 'app-testing', component: TestingComponent , canActivate:[AuthGuard]},
  { path: 'app-navigation-bar', component: NavigationBarComponent , canActivate:[AuthGuard]},
  { path: 'app-hi-chart', component: HiChartComponent , canActivate:[AuthGuard]},
  { path: 'app-loan-page', component: LoanPageComponent , canActivate:[AuthGuard]},
  { path: 'app-edit-user', component: EditUserComponent , canActivate:[AuthGuard]} ,
  { path: 'app-show-user-details', component: ShowUserDetailsComponent , canActivate:[AuthGuard]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}