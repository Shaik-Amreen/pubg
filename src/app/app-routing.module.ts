import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from './details/details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pubg' },
  { path: 'pubg', component: LandingPageComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'response', component: ResponseComponent },
  { path: 'adminsainadh9381461588', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
