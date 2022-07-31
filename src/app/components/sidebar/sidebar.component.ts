import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @ViewChildren('sbDropdown') sbDropdownElm?: QueryList<ElementRef>;

    constructor() { }

    ngOnInit(): void {
    }

    toggleDropdown(id: string) {
        console.log('event: ', id);
        this.sbDropdownElm?.forEach((li: ElementRef<any>) => {
            console.log(li.nativeElement.id);

            if (li.nativeElement.id === id) {
                if (li.nativeElement?.classList.value.includes('open')) {
                    li.nativeElement?.classList.remove('open');
                } else {
                    li.nativeElement?.classList.add('open');
                }
            } else {
                li.nativeElement?.classList.remove('open');
            }
        });
    }

}
