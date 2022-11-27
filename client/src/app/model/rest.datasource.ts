import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Incident } from "./incident.model";
import { map } from "rxjs/operators";
import { JwtHelperService} from '@auth0/angular-jwt';

let PROTOCOL = 'http';
let PORT = 3500;



@Injectable({providedIn: 'any'})
export class RestDataSource{
    baseUrl: string;
    auth_token!: string;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    }
    constructor(private http: HttpClient, private jwtService: JwtHelperService){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getIncidents(): Observable<Incident[]>{
        return this.http.get<Incident[]>(this.baseUrl + 'incidentlist');
    }
    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }

    saveIncident(incident: Incident): Observable<Incident> {
        return this.http.post<Incident>(this.baseUrl + "incidentlist",
            incident, this.getOptions());
    }

    updateIncident(incident: Incident): Observable<Incident> {
        return this.http.put<Incident>(`${this.baseUrl}incidentlist/${incident.id}`,
            incident, this.getOptions());
    }

    deleteIncident(id: number): Observable<Incident> {
        return this.http.delete<Incident>(`${this.baseUrl}incidentlist/${id}`,
            this.getOptions());
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }

    private loadToken(): void{
        const token = localStorage.getItem('id_token');
        this.auth_token = token!;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.auth_token);
    }
}