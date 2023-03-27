import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {SearchDeleteComponent} from "./search-delete/search-delete.component";
import {TodoComponent} from "./todo/todo.component";
import {SymptomsComponent} from "./symptoms/symptoms.component";
import {HealthComponent} from "./health/health.component";
import {AskDrComponent} from "./ask-dr/ask-dr.component";
import {ForumComponent} from "./forum/forum.component";
// import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  // {path: '', component: LoginComponent},
  // {path: 'logout', component: LoginComponent},
  {path:"home",component: HomeComponent},
  // {path:"register", component:RegistrationComponent},
  // {path:"search", component:SearchDeleteComponent},
  // { path: "todo", component: TodoComponent },
  // { path: 'symptoms', component: SymptomsComponent },
  // { path: 'health', component: HealthComponent },
  // { path: 'askDr', component: AskDrComponent },
  // { path: 'forum', component: ForumComponent }

  {path:"",redirectTo:"register",pathMatch:"full"},
{path:"register",component:RegistrationComponent},
// {path:"search",component:SerachDeleteComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
