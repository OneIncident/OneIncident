import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeFirstGuard } from './homeFirst.guard';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent, data:{title:'Home',displayName:''}},
  {path:'dashboard',component:DashboardComponent, data:{title:'Incident Dashboard',displayName:''}, canActivate: [HomeFirstGuard]},
  {path:'incidentlist',component:IncidentListComponent, data:{title:'Incident List'}, canActivate: [HomeFirstGuard]},
  // {path:'login',component:AdminComponent, data: {displayName:''}},
  {path:'',redirectTo:'/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
