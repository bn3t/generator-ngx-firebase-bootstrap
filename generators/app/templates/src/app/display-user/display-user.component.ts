import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import {UserInfo} from "app/shared/user-info";
import {Observable} from "rxjs";

@Component({
    selector: 'app-display-user',
    templateUrl: './display-user.component.html',
    styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent {
    @Output() onLoggedOut = new EventEmitter();


    constructor(private authService: AuthService) {}

    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    }

    logout() {
        this.authService.logout().subscribe(() => this.onLoggedOut.emit("success"));
    }
}
