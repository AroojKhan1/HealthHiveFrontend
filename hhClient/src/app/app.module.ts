import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import {UserRegistrationService} from "./user-registration.service";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { HealthComponent } from './health/health.component';
import { AskDrComponent } from './ask-dr/ask-dr.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import {AdminService} from "./admin.service";
import {UserIdService} from "./user-id.service";
import {SymptomService} from "./symptom.service";
import { WaterComponent } from './health/water/water.component';
import { WorkoutComponent } from './health/workout/workout.component';
import { CalorieComponent } from './health/calorie/calorie.component';
import {WaterService} from "./water.service";
import {CalorieService} from "./calorie.service";
import {WorkoutService} from "./workout.service";
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import {ForumComponent} from "./forum/forum.component";
import {ForumService} from "./forum.service";


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    TodoComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    SymptomsComponent,
    HealthComponent,
    WaterComponent,
    WorkoutComponent,
    CalorieComponent,
    AskDrComponent,
    DoctorHomeComponent,
    ForumComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    RouterModule.forRoot([
        {
          path : '',
          component : HomeComponent
        },
        {
          path : 'login',
          component : LoginComponent
        },  {
        path : 'register',
        component : RegistrationComponent
      },

      {
        path : 'addSymptom',
        component : SymptomsComponent
      },
      {
        path : 'health',
        component : HealthComponent
      },
      {
        path : 'water',
        component : WaterComponent
      },
      {
        path : 'calorie',
        component : CalorieComponent
      },
      {
        path : 'getAllcalorie',
        component : CalorieComponent
      },

      {
        path : 'getAllworkouts',
        component : WorkoutComponent
      },
      {
        path : 'workout',
        component : WorkoutComponent
      },
      {
        path : 'askDr',
        component : AskDrComponent
      },
      {
        path : 'drHome',
        component : DoctorHomeComponent
      },
      {
        path : 'forum',
        component : ForumComponent
      }




    ])


],
  providers: [UserRegistrationService, AdminService,UserIdService,SymptomService,
    WaterService,CalorieService, WorkoutService,ForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
