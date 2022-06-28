import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { SidenavComponent } from './components/layouts/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from './material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { AceEditorModule } from 'ng2-ace-editor';
import { FooterComponent } from './components/layouts/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SidenavComponent,
    FooterComponent,
    StructureDirectiveComponent,
    AttributeDirectiveComponent,
    ComponentInteractionComponent,
    ShowNameComponent,
    ComponentInteractionP2Component,
    TemplateVariableComponent,
    ToggleComponent,
    TypescriptDataTypeComponent,
    TypescriptAdvTypeComponent,
    ContentProjectionComponent,
    ContentProjectionChildComponent,
    NgTemplateComponent,
    IntroDependenceInjectionComponent,
    DependenceInjectionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AceEditorModule
  ],
  entryComponents:[
    ToggleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
