import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, 
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthGuard {

    path!: ActivatedRouteSnapshot;
    route!: ActivatedRouteSnapshot;

    constructor(private router: Router,
        private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean 
    {
        if (!this.auth.authenticated) {
            console.log('Can\'t Authenticate')
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        console.log('authenticated');
        return true;
    }
}