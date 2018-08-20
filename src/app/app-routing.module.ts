import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpertsComponent } from './experts/experts.component';
import { ExpertDetailComponent } from './expert-detail/expert-detail.component';
import { NewExpertComponent } from './new-expert/new-expert.component';

const routes: Routes = [
  {path: '', redirectTo: '/experts', pathMatch: 'full'},
  {path: 'experts', component: ExpertsComponent},
  {path: 'experts/new', component: NewExpertComponent},
  {path: 'experts/:id', component: ExpertDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
