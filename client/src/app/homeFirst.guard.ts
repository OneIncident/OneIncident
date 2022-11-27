import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { IncidentListComponent } from "./incident-list/incident-list.component";
import { HomeComponent } from "./pages/home/home.component";
@Injectable()
export class HomeFirstGuard {
    private firstNavigation = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != IncidentListComponent) {
                this.router.navigateByUrl("/incidentlist");
                return false;
            }
        }
        return true;
    }
}
