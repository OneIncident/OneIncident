import { Component } from '@angular/core';
import { AuthService } from '../model/auth.service';
import { Incident } from '../model/incident.model';
import { IncidentRepository } from '../model/incident.repository';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css'],
  providers: [AuthService]
})
export class IncidentListComponent {
  constructor(private repository:IncidentRepository) { }


  get incidents():Incident []
{
  return this.repository.getIncidents();
}
}
