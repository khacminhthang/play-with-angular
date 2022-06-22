import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { ComponentInteractionP2Component } from './components/component-interaction-p2/component-interaction-p2.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { StructureDirectiveComponent } from './components/structure-directive/structure-directive.component';
import { TemplateVariableComponent } from './components/template-variable/template-variable.component';
import { TypescriptAdvTypeComponent } from './components/typescript-adv-type/typescript-adv-type.component';
import { TypescriptDataTypeComponent } from './components/typescript-data-type/typescript-data-type.component';

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
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent
  },
  {
    path: 'component-interaction-p1',
    component: ComponentInteractionComponent
  },
  {
    path: 'component-interaction-p2',
    component: ComponentInteractionP2Component
  },
  {
    path: 'template-variable',
    component: TemplateVariableComponent
  },
  {
    path: 'typescript-data-type',
    component: TypescriptDataTypeComponent
  },
  {
    path: 'typescript-adv-type',
    component: TypescriptAdvTypeComponent
  },
  {
    path: 'content-projection',
    component: ContentProjectionComponent
  },
  {
    path: 'ng-template',
    component: NgTemplateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }