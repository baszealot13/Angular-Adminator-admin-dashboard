import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../services/authentication.guard';
import { DashboardsComponent } from './dashboards.component';

const routes: Routes = [{
    path: '', component: DashboardsComponent, canActivate: [AuthenticationGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
