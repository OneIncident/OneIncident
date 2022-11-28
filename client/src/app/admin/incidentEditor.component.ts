import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Incident } from "../model/incident.model";
import { IncidentRepository } from "../model/incident.repository";
import { AuthService } from "../model/auth.service";

@Component({
    templateUrl: "incidentEditor.component.html",
    providers: [AuthService]
})

export class IncidentEditorComponent {

    editing: boolean = false;
    inc: Incident = new Incident();

    constructor(private repository: IncidentRepository,
        private router: Router,
        activeRoute: ActivatedRoute) 
    {
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.inc = repository.getIncident(activeRoute.snapshot.params["id"]);
        }
    }

    save(form: NgForm) {
        this.repository.saveIncident(this.inc);
        this.router.navigateByUrl("/admin/main/incidents");
    }
}