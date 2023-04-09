import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import {UserRegistrationService} from "./user-registration.service";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { HealthComponent } from './health/health.component';
import { AskDrComponent } from './ask-dr/ask-dr.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import {AdminService} from "./admin.service";
import {UserIdService} from "./user-id.service";
import {SymptomService} from "./symptom.service";

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
    // AskDrComponent,
    // ForumComponent,

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
        path : 'profile/:adminId',
        component : ProfileComponent
      },

      {
        path : 'addSymptom',
        component : SymptomsComponent
      },
      {
        path : 'health',
        component : SymptomsComponent
      }

    ])


],
  providers: [UserRegistrationService, AdminService,UserIdService,SymptomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
