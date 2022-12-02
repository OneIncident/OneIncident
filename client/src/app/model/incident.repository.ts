import { Injectable } from '@angular/core';
import { Incident } from './incident.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class IncidentRepository
{
  private incidents: Incident[] = [];
  private statuss: string[] = [];

  constructor(private dataSource: StaticDataSource)
  { 
    //send the data to the subscriber of specific status 
    dataSource.getIncidents().subscribe(data => {
      this.incidents = data;
      this.statuss = data.map(i => i.status)
        .filter((s, index, array) => array.indexOf(s) === index).sort();
    });
  }

  getIncidents(status: string = null): Incident[]
  {
    return this.incidents
      .filter(i => status == null || status === i.status);
  }

  getIncident(id: number): Incident
  {
    return this.incidents.find(i => i._id === id);
  }

  getStatus(): string[]
  {
    return this.statuss;
  }
}
