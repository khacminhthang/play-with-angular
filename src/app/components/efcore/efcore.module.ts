import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FragmentsModule } from 'src/app/layout/fragments/fragments.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { EFCoreRoutingModule } from './efcore-routing.module';
import { InstallComponent } from './install/install.component';
import { ExistingDatabaseComponent } from './existing-database/existing-database.component';
import { DbContextComponent } from './db-context/db-context.component';
import { QueryingComponent } from './querying/querying.component';
import { SavingDataComponent } from './saving-data/saving-data.component';
import { ConventionsComponent } from './conventions/conventions.component';

@NgModule({
  declarations: [
    IntroComponent,
    InstallComponent,
    ExistingDatabaseComponent,
    DbContextComponent,
    QueryingComponent,
    SavingDataComponent,
    ConventionsComponent
  ],
  imports: [
    CommonModule,
    EFCoreRoutingModule,
    MaterialModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class EFCoreModule { }
