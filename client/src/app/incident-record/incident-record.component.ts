import { Component } from '@angular/core';
import { Incident } from '../model/incident.model';
import { IncidentRepository } from './../model/incident.repository';

@Component({
  selector: 'app-incident-record',
  templateUrl: './incident-record.component.html',
  styleUrls: ['./incident-record.component.css']
})
export class IncidentRecordComponent {

public selectedStatus = null;
public incidentsPerPage = 4;
public selectedPage = 1;

constructor(private repository: IncidentRepository) {}

get incidents(): Incident[] 
{
  const pageIndex = (this.selectedPage - 1) * this.incidentsPerPage;
return this.repository.getIncidents(this.selectedStatus)
.slice(pageIndex, pageIndex + this.incidentsPerPage);
}

get statuss(): string[] 
{
return this.repository.getStatus();
}

changeStatus(newStatus?: string): void 
{
this.selectedStatus = newStatus;
}

changePage(newPage: number): void
{
  this.selectedPage = newPage;
}

changePageSize(newSize: number): void
{
  this.incidentsPerPage = Number(newSize);
  this.changePage(1);
}

get pageCount(): number
{
  return Math.ceil(this.repository
    .getIncidents(this.selectedStatus).length / this.incidentsPerPage);
}
}
