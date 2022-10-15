import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './home/details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: `home`, redirectTo: ``, pathMatch: `full` },
  { path: ``, component: HomeComponent },
  { path: `home/:id`, component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
