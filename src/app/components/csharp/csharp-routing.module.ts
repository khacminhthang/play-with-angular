import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { BasicSyntaxComponent } from './basic-syntax/basic-syntax.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { OverviewComponent } from './overview/overview.component';
import { ProgramStructureComponent } from './program-structure/program-structure.component';

const csharpRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'program-structure',
        component: ProgramStructureComponent
      },
      {
        path: 'basic-syntax',
        component: BasicSyntaxComponent
      },
      {
        path: 'data-types',
        component: DataTypesComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(csharpRoutes)],
  exports: [RouterModule]
})
export class CSharpRoutingModule { }
