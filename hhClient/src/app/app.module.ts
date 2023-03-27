import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
// import { LoginComponent } from './login/login.component';
// import { LogoutComponent } from './logout/logout.component';
// import {HttpInterceptorService} from "./http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    // SearchDeleteComponent,
    HomeComponent,
    // TodoComponent,
    // SymptomsComponent,
    // HealthComponent,
    // AskDrComponent,
    // ForumComponent,
    // LoginComponent,
    // LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
