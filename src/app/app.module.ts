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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
