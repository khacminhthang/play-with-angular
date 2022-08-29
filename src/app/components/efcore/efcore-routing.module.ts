import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { DbContextComponent } from './db-context/db-context.component';
import { ExistingDatabaseComponent } from './existing-database/existing-database.component';
import { InstallComponent } from './install/install.component';
import { IntroComponent } from './intro/intro.component';
import { QueryingComponent } from './querying/querying.component';

const efcoreRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'install',
        component: InstallComponent
      },
      {
        path: 'existing-database',
        component: ExistingDatabaseComponent
      },
      {
        path: 'dbcontext',
        component: DbContextComponent
      },
      {
        path: 'querying',
        component: QueryingComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(efcoreRoutes)],
  exports: [RouterModule]
})
export class EFCoreRoutingModule { }
