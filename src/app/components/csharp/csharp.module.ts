import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FragmentsModule } from 'src/app/layout/fragments/fragments.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { CSharpRoutingModule } from './csharp-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    CSharpRoutingModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class CsharpModule { }
