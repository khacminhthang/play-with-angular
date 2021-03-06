import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentInteractionP2Component } from './component-interaction-p2/component-interaction-p2.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentProjectionChildComponent } from './content-projection/content-projection-child/content-projection-child.component';
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
import { ShowNameComponent } from './component-interaction/show-name/show-name.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { ToggleComponent } from './template-variable/toggle/toggle.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { TypescriptAdvTypeComponent } from './typescript-adv-type/typescript-adv-type.component';
import { TypescriptDataTypeComponent } from './typescript-data-type/typescript-data-type.component';
import { MaterialModule } from 'src/app/material.module';
import { AngularRoutingModule } from './angular-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FragmentsModule } from 'src/app/layout/fragments/fragments.module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { RxjsHoosComponent } from './rxjs-hoos/rxjs-hoos.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    StructureDirectiveComponent,
    AttributeDirectiveComponent,
    ComponentInteractionComponent,
    ShowNameComponent,
    ComponentInteractionP2Component,
    ContentProjectionChildComponent,
    TemplateVariableComponent,
    ToggleComponent,
    TypescriptDataTypeComponent,
    TypescriptAdvTypeComponent,
    ContentProjectionComponent,
    NgTemplateComponent,
    IntroDependenceInjectionComponent,
    DependenceInjectionComponent,
    ContentChildComponent,
    PipeComponent,
    IntroRxjsObservableComponent,
    RxjsCreationOperatorsComponent,
    TransformationOperatorsComponent,
    RxjsFilteringOperatorsComponent,
    RxjsCombinationOperatorsComponent,
    RxjsErrorHandlingComponent,
    RxjsHoosComponent,
    RxjsSubjectComponent
  ],
  entryComponents: [
    ToggleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularRoutingModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class AngularModule { }
