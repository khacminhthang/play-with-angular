import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { RepositoryComponent } from './repository/repository.component';
import { UnitOfWorkComponent } from './unit-of-work/unit-of-work.component';

const aspdotnetRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'unit-of-work',
        component: UnitOfWorkComponent
      },
      {
        path: 'repository',
        component: RepositoryComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(aspdotnetRoutes)],
  exports: [RouterModule]
})
export class AspDotNetRoutingModule { }
