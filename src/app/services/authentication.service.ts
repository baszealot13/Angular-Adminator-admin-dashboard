import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() { }

    isLoggedIn() {
        return !!localStorage.getItem('atk');
    }
}
