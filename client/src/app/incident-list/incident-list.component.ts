import { Component } from '@angular/core';
import { Incident } from '../model/incident.model';
import { IncidentRepository } from '../model/incident.repository';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent {
  constructor(private repository:IncidentRepository) { }


  get incidents():Incident []
{
  return this.repository.getIncidents();
}
}
