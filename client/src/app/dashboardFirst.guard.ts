import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { IncidentListComponent } from "./incident-list/incident-list.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HomeComponent } from "./pages/home/home.component";
@Injectable()
export class DashboardFirstGuard {
    private firstNavigation = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != DashboardComponent) {
                this.router.navigateByUrl("/incidentlist");
                return false;
            }
        }
        return true;
    }
}
