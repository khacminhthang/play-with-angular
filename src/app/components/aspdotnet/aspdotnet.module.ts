import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitOfWorkComponent } from './unit-of-work/unit-of-work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FragmentsModule } from 'src/app/layout/fragments/fragments.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { AspDotNetRoutingModule } from './aspdotnet-routing.module';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    UnitOfWorkComponent,
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    AspDotNetRoutingModule,
    MaterialModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class AspdotnetModule { }
