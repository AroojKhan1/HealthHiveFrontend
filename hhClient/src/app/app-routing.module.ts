import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {TodoComponent} from "./todo/todo.component";

import {SymptomsComponent} from "./symptoms/symptoms.component";

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {HealthComponent} from "./health/health.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'logout', component: LoginComponent},
  {path:"home/:id",component: HomeComponent},
  { path: "yourTodos", component: TodoComponent },
  { path: 'addSymptom', component: SymptomsComponent },
  { path: 'symptoms', component: SymptomsComponent },
  { path: 'health', component: HealthComponent },
  // { path: 'askDr', component: AskDrComponent },

  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"register",component:RegistrationComponent},


];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
