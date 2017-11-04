import {Component} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    isLoggedIn = new BehaviorSubject<boolean>(false);

    constructor(private authService: AuthService, private router: Router) {
        this.authService.isLoggedIn().subscribe(this.isLoggedIn);
    }

    navigateToResetPassword($event) {
        this.router.navigate(['reset-password']);
    }

    navigateToHome() {
        this.router.navigate(['/']);
    }
}
