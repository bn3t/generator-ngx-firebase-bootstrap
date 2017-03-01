import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "app/shared/auth.service";

@Component({
    selector: 'app-all-in-one-page',
    templateUrl: './all-in-one-page.component.html',
    styleUrls: ['./all-in-one-page.component.css']
})
export class AllInOnePageComponent {

    constructor(private authService: AuthService) {
    }

    isLoggedIn(): Observable<boolean> {
        return this.authService.isLoggedIn();
    }
}
