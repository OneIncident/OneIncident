import { Component } from "@angular/core";
import { AuthService } from "../model/auth.service";
import { Incident } from "../model/incident.model";
import { IncidentRepository } from "../model/incident.repository";

@Component({
    providers: [AuthService],
    templateUrl: "incidentTable.component.html"
})

export class IncidentTableComponent {

    constructor(private repository: IncidentRepository) { }

    getIncidents(): Incident[] {
        return this.repository.getIncidents();
    }
    
    deleteIncident(id: number) {
        this.repository.deleteIncident(id+456);
    }
}