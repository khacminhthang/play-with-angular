import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { HomeComponent } from '../home/home.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ComponentInteractionP2Component } from './component-interaction-p2/component-interaction-p2.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DependenceInjectionComponent } from './dependence-injection/dependence-injection.component';
import { IntroDependenceInjectionComponent } from './intro-dependence-injection/intro-dependence-injection.component';
import { IntroRxjsObservableComponent } from './intro-rxjs-observable/intro-rxjs-observable.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipeComponent } from './pipe/pipe.component';
import { RxjsCombinationOperatorsComponent } from './rxjs-combination-operators/rxjs-combination-operators.component';
import { RxjsCreationOperatorsComponent } from './rxjs-creation-operators/rxjs-creation-operators.component';
import { RxjsErrorHandlingComponent } from './rxjs-error-handling/rxjs-error-handling.component';
import { RxjsFilteringOperatorsComponent } from './rxjs-filtering-operators/rxjs-filtering-operators.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { TypescriptAdvTypeComponent } from './typescript-adv-type/typescript-adv-type.component';
import { TypescriptDataTypeComponent } from './typescript-data-type/typescript-data-type.component';

const angularRoutes: Routes = [
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
      {
        path: 'filtering-operators',
        component: RxjsFilteringOperatorsComponent
      },
      {
        path: 'combination-operators',
        component: RxjsCombinationOperatorsComponent
      },
      {
        path: 'error-handling',
        component: RxjsErrorHandlingComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(angularRoutes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
