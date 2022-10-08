import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionButton } from 'src/app/components/layout/dashboard/dashboard.component';
import { IEmployee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
    selector: 'app-employee-detail-page',
    templateUrl: './employee-detail-page.component.html',
    styleUrls: ['./employee-detail-page.component.css']
})
export class EmployeeDetailPageComponent implements OnInit {

    // ** Action Button
    ActionButton: ActionButton[];

    // ** Employee Data
    EmployeeData!: IEmployee;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private employeeService: EmployeeService,
    ) {
        // ** Assign to Action Button
        this.ActionButton = [
            { id: 'back', icon: 'fas fa-chevron-left fa-xs', title: 'Ok' },
        ];
    }

    ngOnInit(): void {
        const id_employee = this.activatedRoute.snapshot.params.id;
        this.getEmployeeData(id_employee);
    }

    getEmployeeData(id: number): void {
        this.employeeService.getById(id)
            .subscribe((result) => {
                this.EmployeeData = result;
            });
    }

    handleClickActionButton(id: string): void {
        switch (id) {
            case 'back':
                this.router.navigateByUrl('employee-list');
                break;
            default:
                break;
        }
    }
}
