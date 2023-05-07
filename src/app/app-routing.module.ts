import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/authentication/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarpageComponent } from './components/carpage/carpage.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'car-details',
        component: CarDetailsComponent,
      },
      {
        path: 'car-page',
        component: CarpageComponent,
      },
      {
        path: 'admin-page',
        component: AdminPageComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
