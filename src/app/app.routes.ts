import { Routes } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [

{path:"" ,redirectTo:"register" ,pathMatch:'full'},
{path:"timeline" ,component:TimelineComponent ,title:"timeline"},
{path:"login" ,component:LoginComponent ,title:"login"},
{path:"register" ,component:RegisterComponent ,title:"register"},
{path:"**" ,component:NoFoundComponent ,title:"NoFound"},


];
