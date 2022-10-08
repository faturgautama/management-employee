import { Component, OnInit } from '@angular/core';
import { SignIn } from 'src/app/model/authentication.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    // ** User Data Variable
    UserData: SignIn;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
        // ** Assign User Data Variable 
        this.UserData = this.authenticationService.getUserData();
    }

    ngOnInit(): void {
    }

}
