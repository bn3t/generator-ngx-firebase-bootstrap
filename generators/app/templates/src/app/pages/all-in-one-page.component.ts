import {Component} from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import {AuthService} from "app/shared/auth.service";

@Component({
    selector: 'app-all-in-one-page',
    templateUrl: './all-in-one-page.component.html',
    styleUrls: ['./all-in-one-page.component.css']
})
export class AllInOnePageComponent {
    private isLoggedIn = new BehaviorSubject<boolean>(false);

    constructor(private authService: AuthService) {
        this.authService.isLoggedIn().subscribe(this.isLoggedIn);
    }
}
