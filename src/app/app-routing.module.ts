import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from 'src/pages/landingPage/landingPage.component';
import { LoginPageComponent } from 'src/pages/login/login.component';
import { RegisterPageComponent } from 'src/pages/register/register.component';
import { ClinicDetailPageComponent } from 'src/pages/clinicDetail/clinicDetail.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'clinicDetail/:id', component: ClinicDetailPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
