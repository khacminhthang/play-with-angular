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
import { GuardsAndResolversPart1Component } from './guards-and-resolvers-part1/guards-and-resolvers-part1.component';
import { GuardsAndResolversPart2Component } from './guards-and-resolvers-part2/guards-and-resolvers-part2.component';
import { GuardsAndResolversPart3Component } from './guards-and-resolvers-part3/guards-and-resolvers-part3.component';
import { IntroDependenceInjectionComponent } from './intro-dependence-injection/intro-dependence-injection.component';
import { IntroRxjsObservableComponent } from './intro-rxjs-observable/intro-rxjs-observable.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipeComponent } from './pipe/pipe.component';
import { RouterPart2Component } from './router-part2/router-part2.component';
import { RouterComponent } from './router/router.component';
import { RxjsCombinationOperatorsComponent } from './rxjs-combination-operators/rxjs-combination-operators.component';
import { RxjsCreationOperatorsComponent } from './rxjs-creation-operators/rxjs-creation-operators.component';
import { RxjsErrorHandlingComponent } from './rxjs-error-handling/rxjs-error-handling.component';
import { RxjsFilteringOperatorsComponent } from './rxjs-filtering-operators/rxjs-filtering-operators.component';
import { RxjsHoosComponent } from './rxjs-hoos/rxjs-hoos.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenForm2Component } from './template-driven-form2/template-driven-form2.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { TypescriptAdvTypeComponent } from './typescript-adv-type/typescript-adv-type.component';
import { TypescriptDataTypeComponent } from './typescript-data-type/typescript-data-type.component';

const angularRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
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
      {
        path: 'rxjs-hoos',
        component: RxjsHoosComponent
      },
      {
        path: 'rxjs-subject',
        component: RxjsSubjectComponent
      },
      {
        path: 'router',
        component: RouterComponent
      },
      {
        path: 'router-part2',
        component: RouterPart2Component
      },
      {
        path: 'lazy-load',
        component: LazyLoadComponent
      },
      {
        path: 'guards-and-resolvers-part1',
        component: GuardsAndResolversPart1Component
      },
      {
        path: 'guards-and-resolvers-part2',
        component: GuardsAndResolversPart2Component
      },
      {
        path: 'guards-and-resolvers-part3',
        component: GuardsAndResolversPart3Component
      },
      {
        path: 'template-driven-form-1',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'template-driven-form-2',
        component: TemplateDrivenForm2Component
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(angularRoutes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
