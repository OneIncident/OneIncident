import { Injectable } from '@angular/core';
import { Incident } from './incident.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class IncidentRepository {
  private incidents: Incident[] = [];
  private statuss: string[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {
    //send the data to the subscriber of specific status 
    dataSource.getIncidents().subscribe(data => {
      this.incidents = data;
      this.statuss = data.map(i => i.status)
        .filter((s, index, array) => array.indexOf(s) === index).sort();
    });
  }

  loadIncidents(): void {
    this.loaded = true;
    this.dataSource.getIncidents()
      .subscribe(incidents => this.incidents = incidents);
  }

  getIncidents(status: string = null): Incident[] {
    // code to ensure no double loading of data
    if (!this.loaded) {
      this.loadIncidents();
    }
    return this.incidents
      .filter(i => status == null || status === i.status);
  }

  getIncident(id: number): Incident {
    return this.incidents.find(i => i._id === id);
  }

  getStatus(): string[] {
    return this.statuss;
  }
  saveIncident(incident: Incident) {
    if (incident._id == null || incident._id == 0) {
      this.dataSource.saveIncident(incident)
        .subscribe(i => this.incidents.push(i));
    } else {
      this.dataSource.updateIncident(incident)
        .subscribe(i => {
          this.incidents.splice(this.incidents.
            findIndex(i => i._id == incident._id), 1, incident);
        });
    }
  }

  deleteIncident(id: number) {
    this.dataSource.deleteIncident(id).subscribe(i => {
      this.incidents.splice(this.incidents.
        findIndex(i => i._id == id), 1);
    })
  }
}
