import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    @ViewChild('appMain', { read: ElementRef }) appMainRef?: ElementRef<HTMLElement>;
    isLoggedIn: boolean = false;

    constructor(private authServ: AuthenticationService) {}

    ngOnInit(): void {
        this.isLoggedIn = this.authServ.isLoggedIn();

        console.log('this.isLoggedIn: ', this.isLoggedIn);
    }

    parrentEventHandlerFunction(event: any) {
        const appMainRef = this.appMainRef?.nativeElement;

        appMainRef?.classList.toggle('is-collapsed');
        event.preventDefault();
    }

}
