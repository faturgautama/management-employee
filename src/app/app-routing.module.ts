import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { EmployeeDetailPageComponent } from './pages/employee-detail-page/employee-detail-page.component';
import { EmployeeListPageComponent } from './pages/employee-list-page/employee-list-page.component';

const routes: Routes = [
    { path: "", component: AuthenticationComponent, data: { title: "Sign In" } },
    { path: "employee-list", component: EmployeeListPageComponent, data: { title: "Employee List" } },
    { path: "detail-employee/:id", component: EmployeeDetailPageComponent, data: { title: "Employee Detail" } },
    { path: "add-employee", component: AddEmployeePageComponent, data: { title: "Add Employee" } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
