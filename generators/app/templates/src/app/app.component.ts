import {Component} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import {Observable} from "rxjs";
import {UserInfo} from "app/shared/user-info";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works! - ' + '<%= name %>';

    constructor(private authService: AuthService) {

    }

    login() {
        this.authService.loginViaProvider("google");
    }

    logout() {
        this.authService.logout();
    }

    isLoggedIn(): Observable<boolean> {
        return this.authService.isLoggedIn();
    }

    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    }
}
