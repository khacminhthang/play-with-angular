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

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SidenavComponent,
    FooterComponent,
    StructureDirectiveComponent,
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
