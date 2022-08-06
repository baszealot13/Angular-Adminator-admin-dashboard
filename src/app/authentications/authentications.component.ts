import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-authentications',
    templateUrl: './authentications.component.html',
    styleUrls: ['./authentications.component.scss'],
})
export class AuthenticationsComponent implements OnInit {
    signIn = { username: '', password: '', rememberMe: false };
    signInForm = new FormGroup({
        username: new FormControl(this.signIn.username, [Validators.required]),
        password: new FormControl(this.signIn.password, [
            Validators.required,
            Validators.minLength(8)
        ]),
        rememberMe: new FormControl(this.signIn.rememberMe)
    });

    get username() { return this.signInForm.get('username')!; }
    get password() { return this.signInForm.get('password')!; }
    get rememberMe() { return this.signInForm.get('rememberMe')!; }

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    submitSignIn() {
        // console.log(this.signInForm.value);
        localStorage.setItem('atk', (Math.random() + 1).toString(36).substring(7));

        this.router.navigate(['/']).then(() => window.location.reload());
    }
}
