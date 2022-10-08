import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    // ** Form Authetication
    FormAuthentication: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService
    ) {
        // ** Set initial Form Authentication
        this.FormAuthentication = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit(): void {
    }

    handleSignIn(): void {
        this.authenticationService.signIn(this.username.value, this.password.value);
    }

    get username(): AbstractControl { return this.FormAuthentication.get("username") as AbstractControl }
    get password(): AbstractControl { return this.FormAuthentication.get("password") as AbstractControl }

}
