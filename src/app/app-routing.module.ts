import {HomeComponent} from './Home/home.component';
import { BlogComponent } from './Blog/blog.component';
import { AboutMeComponent } from './AboutMe/aboutMe.component';
import { ProjectComponent } from './Projects/project.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}




