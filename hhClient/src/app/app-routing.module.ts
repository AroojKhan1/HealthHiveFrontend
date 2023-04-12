import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {TodoComponent} from "./todo/todo.component";

import {SymptomsComponent} from "./symptoms/symptoms.component";

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {HealthComponent} from "./health/health.component";
import {WaterComponent} from "./health/water/water.component";
import {CalorieComponent} from "./health/calorie/calorie.component";
import {WorkoutComponent} from "./health/workout/workout.component";
import {AskDrComponent} from "./ask-dr/ask-dr.component";
import {DoctorHomeComponent} from "./doctor-home/doctor-home.component";

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"register",component:RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path:"home/:id",component: HomeComponent},
  { path: "yourTodos", component: TodoComponent },
  { path: 'addSymptom', component: SymptomsComponent },
  { path: 'symptoms', component: SymptomsComponent },
  { path: 'health', component: HealthComponent },
  { path: 'water', component: WaterComponent },
  { path: 'calorie', component: CalorieComponent },
  { path: 'getAllcalorie', component: CalorieComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'getAllworkouts', component: WorkoutComponent },
  { path: 'askDr', component: AskDrComponent },
  { path: 'drHome', component: DoctorHomeComponent},




];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
