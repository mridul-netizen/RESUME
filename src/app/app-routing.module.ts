import { HomeComponent } from './Home/home.component';
import { AboutmeComponent } from './AboutMe/aboutme.component';
import { ProjectComponent } from './Projects/project.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutMe', component: AboutmeComponent },
  { path: 'Projects', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

