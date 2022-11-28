import { Injectable } from "@angular/core";
import { Incident } from "./incident.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable({ providedIn: 'any' })
export class IncidentRepository {
    private incidents: Incident[] = [];
    // private categories: string[] = [];
    private loaded = false;

    constructor(private dataSource: RestDataSource) {
        dataSource.getIncidents().subscribe(data => {
            this.incidents = data;
            // this.categories = data.map(p => p.category!)
            //     .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    loadIncidents(): void {
        this.loaded = true;
        this.dataSource.getIncidents()
        .subscribe(incidents => this.incidents = incidents);
    }

    // to promote no double loading of data
    getIncidents(): Incident[] {
        if(!this.loaded){
            this.loadIncidents();
        }
        return this.incidents
        // .filter(p => category == null || category == p.category!);
    }


    getIncident(id: number): Incident {
        return (this.incidents.find(i => i.id == id)!);
    }

    // getCategories(): string[] {
    //     return this.categories;
    // }

    saveIncident(incident: Incident) {
        if (incident.id == null || incident.id == 0) {
            this.dataSource.saveIncident(incident)
                .subscribe(i => this.incidents.push(i));
        } else {
            this.dataSource.updateIncident(incident)
                .subscribe(i => {
                    this.incidents.splice(this.incidents.
                        findIndex(i => i.id == incident.id), 1, incident);
                });
        }
    }

    deleteIncident(id: number) {
        this.dataSource.deleteIncident(id).subscribe(i => {
            this.incidents.splice(this.incidents.
                findIndex(i => i.id == id), 1);
        })
    }
}
