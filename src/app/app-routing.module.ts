import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { ComponentInteractionP2Component } from './components/component-interaction-p2/component-interaction-p2.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DependenceInjectionComponent } from './components/dependence-injection/dependence-injection.component';
import { IntroDependenceInjectionComponent } from './components/intro-dependence-injection/intro-dependence-injection.component';
import { IntroRxjsObservableComponent } from './components/intro-rxjs-observable/intro-rxjs-observable.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { RxjsCreationOperatorsComponent } from './components/rxjs-creation-operators/rxjs-creation-operators.component';
import { StructureDirectiveComponent } from './components/structure-directive/structure-directive.component';
import { TemplateVariableComponent } from './components/template-variable/template-variable.component';
import { TransformationOperatorsComponent } from './components/transformation-operators/transformation-operators.component';
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
  {
    path: 'intro-dependency-injection',
    component: IntroDependenceInjectionComponent
  },
  {
    path: 'dependency-injection',
    component: DependenceInjectionComponent
  },
  {
    path: 'content-child',
    component: ContentChildComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'intro-rxjs-observable',
    component: IntroRxjsObservableComponent
  },
  {
    path: 'rxjs-creation-operators',
    component: RxjsCreationOperatorsComponent
  },
  {
    path: 'transformation-operators',
    component: TransformationOperatorsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
