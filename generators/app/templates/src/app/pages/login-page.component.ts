import {Component} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import { Observable, BehaviorSubject } from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    private isLoggedIn = new BehaviorSubject<boolean>(false);

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
