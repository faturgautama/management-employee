import { formatCurrency } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionButton } from 'src/app/components/layout/dashboard/dashboard.component';
import { GridAttribute, TableComponent } from 'src/app/components/table/table.component';
import { IEmployee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
    selector: 'app-employee-list-page',
    templateUrl: './employee-list-page.component.html',
    styleUrls: ['./employee-list-page.component.css']
})
export class EmployeeListPageComponent implements OnInit {

    // ** Action Button
    ActionButton: ActionButton[];

    // ** Table
    @ViewChild('TableComponent') TableComponent!: TableComponent;
    GridAttributes: GridAttribute;
    GridSelectedData!: IEmployee;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private employeeService: EmployeeService
    ) {
        // ** Assing to Action Button
        this.ActionButton = [
            { id: 'detail', icon: 'fas fa-info fa-xs', title: 'Detail Employee' },
            { id: 'add', icon: 'fas fa-plus fa-xs', title: 'Add Employee' },
        ];

        // ** Assign to Grid Attributes
        this.GridAttributes = {
            column: [
                { field: 'username', headerName: 'USERNAME' },
                { field: 'firstName', headerName: 'FIRST NAME', },
                { field: 'lastName', headerName: 'LAST NAME', },
                { field: 'email', headerName: 'EMAIL', },
                {
                    field: 'birthDate', headerName: 'BIRTH DATE',
                    cellRenderer: (data: any) => {
                        return this.utilityService.onFormatDate(data.value, 'Do/MM/yyyy HH:mm:ss');
                    }
                },
                {
                    field: 'basicSalary', headerName: 'BASIC SALARY',
                    cellRenderer: (data: any) => {
                        return formatCurrency(data.value, 'EN', 'Rp. ');
                    }
                },
                { field: 'status', headerName: 'STATUS', },
                { field: 'group', headerName: 'GROUP', },
                {
                    field: 'description', headerName: 'DESCRIPTION',
                    cellRenderer: (data: any) => {
                        return this.utilityService.onFormatDate(data.value, 'Do/MM/yyyy HH:mm:ss');
                    }
                },
                {
                    field: '', headerName: 'ACTION',
                    cellRenderer: (data: any) => {
                        return `<span class="badge text-bg-warning me-1">
                                    <i class="fas fa-edit"></i>
                                </span>
                                <span class="badge text-bg-danger">
                                    <i class="fas fa-trash-alt"></i>
                                </span>`
                    }
                }
            ],
            dataSource: []
        };
    }

    ngOnInit(): void {
        this.getAllEmployee();
    }

    getAllEmployee(): void {
        this.employeeService.getAll()
            .subscribe((result) => {
                this.GridAttributes.dataSource = result;
            });
    }

    handleSelectedRow(args: any): void {
        this.GridSelectedData = args;
    }

    handleClickActionButton(id: string): void {
        switch (id) {
            case 'detail':
                this.router.navigate(['detail-employee', this.GridSelectedData.id]);
                break;
            case 'add':
                this.router.navigateByUrl('add-employee');
                break;
            default:
                break;
        }
    }
}
