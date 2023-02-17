import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'artforms',component:ArtformsComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'single',component:SinglepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
