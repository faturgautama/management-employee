import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SignIn } from '../model/authentication.model';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private router: Router,
        private utilityService: UtilityService
    ) { }

    getUserData(): SignIn {
        return JSON.parse(localStorage.getItem("UserData") as any);
    }

    signIn(username: string, password: string): void {
        this.utilityService.fireLoadingSpinner();

        setTimeout(() => {
            this.utilityService.closeLoadingSpinner();

            if (username && password) {
                this.utilityService.fireCustomAlert({ icon: "success", title: 'Success', content: 'Sign In Berhasil' })
                    .then(() => {
                        const response: SignIn = {
                            username: username,
                            firstName: "John",
                            lastName: "Doe",
                            email: "johnDoe@mail.com",
                            group: "ADMIN"
                        };

                        localStorage.setItem("UserData", JSON.stringify(response));

                        this.router.navigateByUrl('employee-list')
                    });
            } else {
                this.utilityService.fireCustomAlert(
                    {
                        icon: "error",
                        title: 'Oops',
                        content: 'Check Username / Password Anda'
                    }
                );
            }
        }, 1500);
    }
}
