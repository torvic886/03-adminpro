import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  // path: '/dashboard' PagesRouting
  // path: '/progress' PagesRouting
  // path: '/grafica1' PagesRouting

  // path: '/login' AuthRoutingModule
  // path: '/register' AuthRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent } // si no tiene las rutas de arriba se redireccione a este componente
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),//para rutas principales
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
