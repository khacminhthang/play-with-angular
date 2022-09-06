import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { ConventionsComponent } from './conventions/conventions.component';
import { DbContextComponent } from './db-context/db-context.component';
import { ExistingDatabaseComponent } from './existing-database/existing-database.component';
import { InstallComponent } from './install/install.component';
import { IntroComponent } from './intro/intro.component';
import { OneToManyConventionsComponent } from './one-to-many-conventions/one-to-many-conventions.component';
import { OneToOneConventionsComponent } from './one-to-one-conventions/one-to-one-conventions.component';
import { QueryingComponent } from './querying/querying.component';
import { SavingDataComponent } from './saving-data/saving-data.component';

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
      {
        path: 'saving-data',
        component: SavingDataComponent
      },
      {
        path: 'conventions',
        component: ConventionsComponent
      },
      {
        path: 'one-to-one',
        component: OneToOneConventionsComponent
      },
      {
        path: 'one-to-many',
        component: OneToManyConventionsComponent
      },
      {
        path: 'configurations',
        component: ConfigurationsComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(efcoreRoutes)],
  exports: [RouterModule]
})
export class EFCoreRoutingModule { }
