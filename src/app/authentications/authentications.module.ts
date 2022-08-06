import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationsRoutingModule } from './authentications-routing.module';
import { AuthenticationsComponent } from './authentications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AuthenticationsComponent
    ],
    imports: [
        CommonModule,
        AuthenticationsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthenticationsModule { }
