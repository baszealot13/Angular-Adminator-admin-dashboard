import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: 'authentications', loadChildren: () => import('./authentications/authentications.module')
        .then(m => m.AuthenticationsModule)
}, {
    path: '', loadChildren: () => import('./dashboards/dashboards.module')
        .then(m => m.DashboardsModule)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
