import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { IncidentTableComponent } from "./incidentTable.component";
import { IncidentEditorComponent } from "./incidentEditor.component";
import { AppModule } from "../app.module";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: "incidentlist/:mode/:id", component: IncidentEditorComponent },
            { path: "incidentlist/:mode", component: IncidentEditorComponent },
            { path: "incidentlist", component: IncidentTableComponent },
            { path: "**", redirectTo: "incidentlist" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing,
        AppModule],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent,
        IncidentTableComponent, IncidentEditorComponent]
})

export class AdminModule { }