import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid', component: GridComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
