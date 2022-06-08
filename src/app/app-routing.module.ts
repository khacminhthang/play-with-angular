import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructureDirectiveComponent } from './components/structure-directive/structure-directive.component';

const routes: Routes = [
  {
    path: '',
    component: DataBindingComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'structure-directive',
    component: StructureDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
