import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ActionButton } from 'src/app/components/layout/dashboard/dashboard.component';
import { IEmployee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
    selector: 'app-add-employee-page',
    templateUrl: './add-employee-page.component.html',
    styleUrls: ['./add-employee-page.component.css']
})
export class AddEmployeePageComponent implements OnInit {

    // ** Action Button
    ActionButton: ActionButton[];

    // ** Form Add Employee
    FormAddEmployee: FormGroup;

    // ** Datepicker Birth Date
    @ViewChild('DatepickerBirthDate') DatepickerBirthDate!: DatePickerComponent
    DatepickerMaxDate = new Date();

    // ** Dropdown List Group
    @ViewChild('DropdownGroup') DropdownGroup!: DropDownListComponent;
    DropdownGroupDatasource: string[] = [
        'COWTOWN',
        'CENTREXIN',
        'XINWARE',
        'STREZZO',
        'FIBEROX',
        'KRAGGLE',
        'STEELTAB',
        'ECRATIC',
        'SLAX',
        'RONELON',
    ];

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private employeeService: EmployeeService,
    ) {
        // ** Assign to Action Button
        this.ActionButton = [
            { id: 'back', icon: 'fas fa-chevron-left fa-xs', title: 'Cancel' },
            { id: 'save', icon: 'fas fa-save fa-xs', title: 'Save' },
        ];

        // ** Assign to Form Add Employee
        this.FormAddEmployee = this.formBuilder.group({
            username: ['', [Validators.required]],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            birthDate: ['', [Validators.required]],
            basicSalary: [0, [Validators.required]],
            status: ['', [Validators.required]],
            group: ['', [Validators.required]],
            description: [new Date(), [Validators.required]],
        });
    }

    ngOnInit(): void {
    }

    handleClickActionButton(id: string): void {
        switch (id) {
            case 'back':
                this.router.navigateByUrl('employee-list');
                break;
            case 'save':
                this.handleSubmitForm(this.FormAddEmployee.value);
                break;
            default:
                break;
        }
    }

    handleSubmitForm(FormAddEmployee: IEmployee): void {
        this.employeeService.postSave(FormAddEmployee)
            .subscribe((result) => {
                this.utilityService.fireCustomAlert({ icon: 'success', title: 'Success', content: 'Berhasil Simpan Data' })
                    .then(() => {
                        this.router.navigateByUrl('employee-list');
                    });
            });
    }

    resetForm(): void {
        this.FormAddEmployee.reset();
        this.username.setValue('');
        this.firstName.setValue('');
        this.lastName.setValue('');
        this.email.setValue('');
        this.birthDate.setValue('');
        this.basicSalary.setValue('');
        this.status.setValue('');
        this.group.setValue('');
        this.description.setValue(new Date());
    }

    get username(): AbstractControl { return this.FormAddEmployee.get('username') as AbstractControl }
    get firstName(): AbstractControl { return this.FormAddEmployee.get('firstName') as AbstractControl }
    get lastName(): AbstractControl { return this.FormAddEmployee.get('lastName') as AbstractControl }
    get email(): AbstractControl { return this.FormAddEmployee.get('email') as AbstractControl }
    get birthDate(): AbstractControl { return this.FormAddEmployee.get('birthDate') as AbstractControl }
    get basicSalary(): AbstractControl { return this.FormAddEmployee.get('basicSalary') as AbstractControl }
    get status(): AbstractControl { return this.FormAddEmployee.get('status') as AbstractControl }
    get group(): AbstractControl { return this.FormAddEmployee.get('group') as AbstractControl }
    get description(): AbstractControl { return this.FormAddEmployee.get('description') as AbstractControl }
}
