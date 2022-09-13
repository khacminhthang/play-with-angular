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
import { OneToManyConventionsComponent } from './one-to-many-conventions/one-to-many-conventions.component';
import { OneToOneConventionsComponent } from './one-to-one-conventions/one-to-one-conventions.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { FluentApiComponent } from './fluent-api/fluent-api.component';
import { FluentOneToManyComponent } from './fluent-one-to-many/fluent-one-to-many.component';
import { FluentOneToOneComponent } from './fluent-one-to-one/fluent-one-to-one.component';
import { FluentManyToManyComponent } from './fluent-many-to-many/fluent-many-to-many.component';
import { InsertDataDisconnectedComponent } from './insert-data-disconnected/insert-data-disconnected.component';
import { ChangeTrackerComponent } from './change-tracker/change-tracker.component';

@NgModule({
  declarations: [
    IntroComponent,
    InstallComponent,
    ExistingDatabaseComponent,
    DbContextComponent,
    QueryingComponent,
    SavingDataComponent,
    ConventionsComponent,
    OneToManyConventionsComponent,
    OneToOneConventionsComponent,
    ConfigurationsComponent,
    FluentApiComponent,
    FluentOneToManyComponent,
    FluentOneToOneComponent,
    FluentManyToManyComponent,
    InsertDataDisconnectedComponent,
    ChangeTrackerComponent
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
