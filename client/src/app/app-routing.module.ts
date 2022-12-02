import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentRecordComponent } from './incident-record/incident-record.component';

// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  // {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
  {path: 'incident-record', component: IncidentRecordComponent, data: {title: 'Incident Record'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
