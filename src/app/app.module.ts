import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { StructureDirectiveComponent } from './components/structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ShowNameComponent } from './components/component-interaction/show-name/show-name.component';
import { ComponentInteractionP2Component } from './components/component-interaction-p2/component-interaction-p2.component';
import { TemplateVariableComponent } from './components/template-variable/template-variable.component';
import { ToggleComponent } from './components/template-variable/toggle/toggle.component';
import { TypescriptDataTypeComponent } from './components/typescript-data-type/typescript-data-type.component';
import { TypescriptAdvTypeComponent } from './components/typescript-adv-type/typescript-adv-type.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { ContentProjectionChildComponent } from './components/content-projection/content-projection-child/content-projection-child.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { IntroDependenceInjectionComponent } from './components/intro-dependence-injection/intro-dependence-injection.component';
import { DependenceInjectionComponent } from './components/dependence-injection/dependence-injection.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { IntroRxjsObservableComponent } from './components/intro-rxjs-observable/intro-rxjs-observable.component';
import { RxjsCreationOperatorsComponent } from './components/rxjs-creation-operators/rxjs-creation-operators.component';
import { TransformationOperatorsComponent } from './components/transformation-operators/transformation-operators.component';
import { RxjsFilteringOperatorsComponent } from './components/rxjs-filtering-operators/rxjs-filtering-operators.component';
import { FragmentsModule } from './layout/fragments/fragments.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    RxjsFilteringOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FragmentsModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents:[
    ToggleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
