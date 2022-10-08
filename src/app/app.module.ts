import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { EmployeeListPageComponent } from './pages/employee-list-page/employee-list-page.component';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EmployeeDetailPageComponent } from './pages/employee-detail-page/employee-detail-page.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        EmployeeListPageComponent,
        AddEmployeePageComponent,
        EmployeeDetailPageComponent,
        NavbarComponent,
        DashboardComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        DropDownListModule,
        DatePickerModule,
        DateRangePickerModule,
        AgGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
