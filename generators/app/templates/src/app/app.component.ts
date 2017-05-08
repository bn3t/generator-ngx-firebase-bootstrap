import {Component} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {UserInfo} from "app/shared/user-info";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private alertType = null;
    private alertMessage = "";

    constructor(private authService: AuthService, private router: Router) {
    }

    isLoggedIn(): Observable<boolean> {
        return this.authService.isLoggedIn();
    }

    onResetPasswordSuccess() {
        this.alertType = "success";
        this.alertMessage = "Reset Password Sent!";
    }

    onLoginSuccess() {
        this.alertType = "success";
        this.alertMessage = "Login Success!";
    }

    onRegisterSuccess() {
        this.alertType = "success";
        this.alertMessage = "User registered!";
    }

    onError(err) {
        this.alertType = "danger";
        this.alertMessage = err;
    }

    onLoggedOut() {
        // Just reset any displayed messsage.
        this.alertType = null;
        this.alertMessage = "";
    }

    alertClosed() {
        this.alertType = null;
        this.alertMessage = "";
    }
}
