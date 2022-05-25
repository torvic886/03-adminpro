import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [

  {path: '', 
  component: PagesComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'grafica1', component: Grafica1Component},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', component: NopagefoundComponent} // si no tiene las rutas de arriba se redireccione a este componente
  
] 

 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes)//para rutas principales
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
