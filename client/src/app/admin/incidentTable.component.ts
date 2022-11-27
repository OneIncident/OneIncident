import { Component } from "@angular/core";
import { Incident } from "../model/incident.model";
import { IncidentRepository } from "../model/incident.repository";

@Component({
   
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