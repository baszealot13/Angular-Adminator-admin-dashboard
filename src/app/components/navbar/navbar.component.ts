import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
    @Output() toggleSidebar: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
       
    }

    toggleSidebarClick(event: any) {
        this.toggleSidebar.emit(event);
    }

    ngOnDestroy() {
    }

}
