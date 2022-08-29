import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/angular",
  },
  {
    path: 'angular',
    loadChildren: () =>
      import("src/app/components/angular/angular.module").then((m) => m.AngularModule),
  },
  {
    path: 'csharp',
    loadChildren: () =>
      import("src/app/components/csharp/csharp.module").then((m) => m.CsharpModule),
  },
  {
    path: 'dotnetcore',
    loadChildren: () =>
      import("src/app/components/aspdotnet/aspdotnet.module").then((m) => m.AspdotnetModule),
  },
  {
    path: 'efcore',
    loadChildren: () =>
      import("src/app/components/efcore/efcore.module").then((m) => m.EFCoreModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
