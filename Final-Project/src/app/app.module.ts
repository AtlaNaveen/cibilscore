import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// service
// import { MatFormFieldModule } from '@angular/material/form-field';

import { AuthService } from './shared/services/auth.service';
import { CibilScoreComponent } from './components/cibil-score/cibil-score.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HamburgermenuComponent } from './components/hamburgermenu/hamburgermenu.component';
// import { ApiDataComponent } from './components/api-data/api-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiData } from './shared/services/apidata';
import { TestingComponent } from './components/testing/testing.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HiChartComponent } from './components/hi-chart/hi-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChooseLoanComponent } from './components/choose-loan/choose-loan.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { CibilScore } from './shared/helpers/cibilscore';
import { LoanPageComponent } from './components/loan-page/loan-page.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ShowUserDetailsComponent } from './components/show-user-details/show-user-details.component';
// import { MatSliderModule } from '@angular/material/slider';

// import { NgxEchartsModule } from 'ngx-echarts';
// import { FusionChartsModule } from "angular-fusioncharts";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    CibilScoreComponent,
    UserDetailsComponent,
    HamburgermenuComponent,
    TestingComponent,
    NavigationBarComponent,
    HiChartComponent,
    ChooseLoanComponent,
    LoanPageComponent,
    EditUserComponent,
    ShowUserDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    HttpClientModule,
    FusionChartsModule,
    // MatSliderModule,
    HighchartsChartModule,
    NgxEchartsModule.forRoot({
      echarts: ()=> import('echarts') 
    }),
    
    
  ],
  providers: [AuthService,ApiData,CibilScore],
  bootstrap: [AppComponent],
})

export class AppModule {}