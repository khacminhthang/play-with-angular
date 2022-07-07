import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainShellComponent } from './layout/fragments/main-shell/main-shell.component';
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
import { RxjsFilteringOperatorsComponent } from './components/rxjs-filtering-operators/rxjs-filtering-operators.component';
import { StructureDirectiveComponent } from './components/structure-directive/structure-directive.component';
import { TemplateVariableComponent } from './components/template-variable/template-variable.component';
import { TransformationOperatorsComponent } from './components/transformation-operators/transformation-operators.component';
import { TypescriptAdvTypeComponent } from './components/typescript-adv-type/typescript-adv-type.component';
import { TypescriptDataTypeComponent } from './components/typescript-data-type/typescript-data-type.component';
import { RxjsCombinationOperatorsComponent } from './components/rxjs-combination-operators/rxjs-combination-operators.component';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: '', pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'angular/data-binding',
        component: DataBindingComponent
      },
      {
        path: 'angular/structure-directive',
        component: StructureDirectiveComponent
      },
      {
        path: 'angular/attribute-directive',
        component: AttributeDirectiveComponent
      },
      {
        path: 'angular/component-interaction-p1',
        component: ComponentInteractionComponent
      },
      {
        path: 'angular/component-interaction-p2',
        component: ComponentInteractionP2Component
      },
      {
        path: 'angular/template-variable',
        component: TemplateVariableComponent
      },
      {
        path: 'angular/typescript-data-type',
        component: TypescriptDataTypeComponent
      },
      {
        path: 'angular/typescript-adv-type',
        component: TypescriptAdvTypeComponent
      },
      {
        path: 'angular/content-projection',
        component: ContentProjectionComponent
      },
      {
        path: 'angular/ng-template',
        component: NgTemplateComponent
      },
      {
        path: 'angular/intro-dependency-injection',
        component: IntroDependenceInjectionComponent
      },
      {
        path: 'angular/dependency-injection',
        component: DependenceInjectionComponent
      },
      {
        path: 'angular/content-child',
        component: ContentChildComponent
      },
      {
        path: 'angular/pipe',
        component: PipeComponent
      },
      {
        path: 'angular/intro-rxjs-observable',
        component: IntroRxjsObservableComponent
      },
      {
        path: 'angular/rxjs-creation-operators',
        component: RxjsCreationOperatorsComponent
      },
      {
        path: 'angular/transformation-operators',
        component: TransformationOperatorsComponent
      },
      {
        path: 'angular/filtering-operators',
        component: RxjsFilteringOperatorsComponent
      },
      {
        path: 'angular/combination-operators',
        component: RxjsCombinationOperatorsComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
