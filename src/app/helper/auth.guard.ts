import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userData = JSON.parse(localStorage.getItem("UserData") as any);

        if (userData) {
            return true;
        }

        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return true;
    }
}