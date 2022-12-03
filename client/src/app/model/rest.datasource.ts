import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from './incident.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource
{
  baseUrl: string;

  private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient)
  {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getIncidents(): Observable<Incident[]>
  {
    return this.http.get<Incident[]>(this.baseUrl + 'incident-list');
  }
 
  //create new function to call the JSON data -- json-server --watch
  url='http://localhost:3500/incident-list';

  getAllIncident(){
    return this.http.get(this.url);
  }
  //end

  saveIncidentData(data: any) 
  {
    console.log(data);
    return this.http.post(this.baseUrl + 'incident-list', data);
  }

  deleteIncident (id: any){
    return this.http.delete(`${this.baseUrl + 'incident-list'}/${id}`);
  }

  getIncidentById(id: number){
    return this.http.get(`${this.baseUrl + 'incident-list'}/${id}`);
  }

  updateIncidentData(id: number, data: any){
    return this.http.put(`${this.baseUrl + 'incident-list'}/${id}`, data);

  }
}