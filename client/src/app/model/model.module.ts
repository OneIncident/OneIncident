import { NgModule } from "@angular/core";
import { IncidentRepository } from "./incident.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [IncidentRepository,
    { provide: RestDataSource, useClass: RestDataSource },
    RestDataSource, AuthService]
})
export class ModelModule { }
