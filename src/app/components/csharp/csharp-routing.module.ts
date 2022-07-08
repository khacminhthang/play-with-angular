import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { HomeComponent } from '../home/home.component';

const csharpRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
  },
  {
    path: ':slug',
    component: MainShellComponent,
    children: [
      {
        path: '', pathMatch: 'full',
        component: HomeComponent
      }
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(csharpRoutes)],
  exports: [RouterModule]
})
export class CSharpRoutingModule { }
