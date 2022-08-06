import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationsComponent } from './authentications.component';

const routes: Routes = [{ 
    path: 'signin', component: AuthenticationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationsRoutingModule { }
