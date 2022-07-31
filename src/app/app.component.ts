import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent{
    @ViewChild('appMain', { read: ElementRef }) appMainRef?: ElementRef<HTMLElement>

    parrentEventHandlerFunction(event: any) {
        const appMainRef = this.appMainRef?.nativeElement;

        appMainRef?.classList.toggle('is-collapsed');
        event.preventDefault();
    }

}
