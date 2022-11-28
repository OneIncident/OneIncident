import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardFirstGuard } from './dashboardFirst.guard';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home', displayName: '' } },
  { path: 'login', data: { title: 'Login' }, redirectTo: '/admin/auth', pathMatch: 'full' },
  
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Incident Dashboard', displayName: '' }, canActivate: [DashboardFirstGuard] },
  { path: 'incidentlist', component: IncidentListComponent, data: { title: 'Incident List' }, canActivate: [DashboardFirstGuard] },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DashboardFirstGuard]
})
export class AppRoutingModule { }
