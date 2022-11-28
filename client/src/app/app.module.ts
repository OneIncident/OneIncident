import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { RouterModule } from '@angular/router';
import { DashboardFirstGuard } from './dashboardFirst.guard';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { HttpClientModule } from '@angular/common/http';

export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token')!;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
    IncidentListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',redirectTo:"/home"},
      {
        path: "admin",
        loadChildren: () => import("./admin/admin.module")
          .then(m => m.AdminModule),
        canActivate: []
      },
      { path: "dashboard", redirectTo: "/dashboard" },
      { path: "**", redirectTo: "/home" }
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
