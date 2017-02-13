/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RegisterUserComponent} from "./register-user.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {Observable, ReplaySubject, AsyncSubject} from "rxjs";
import {UserInfo} from "app/shared/user-info";
import {AuthService} from "app/shared/auth.service";

class AuthServiceStub {

    constructor(private loggedin: boolean) {
    }

    login(email: string, password: string) {
    }

    currentUser(): Observable<UserInfo> {
        let userInfo = new UserInfo();
        userInfo.displayName = "my-display-name";
        userInfo.email = "my-email";
        userInfo.uid = "my-uid";
        userInfo.isAnonymous = false;
        userInfo.photoURL = "my-photo-url";
        userInfo.providerId = "my-provider-id";

        let replaySubject = new ReplaySubject();
        if (this.loggedin) {
            replaySubject.next(userInfo);
        }
        return replaySubject;
    }

    isLoggedIn(): Observable<boolean> {
        let isLoggedInBS = new AsyncSubject<boolean>();
        isLoggedInBS.next(true);
        isLoggedInBS.complete();
        return isLoggedInBS;
    }
}

describe('RegisterUserComponent', () => {
    let component: RegisterUserComponent;
    let fixture: ComponentFixture<RegisterUserComponent>;

    beforeEach(async(() => {
        let authServiceStub = new AuthServiceStub(true);

        TestBed.configureTestingModule({
            declarations: [RegisterUserComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [
                {provide: AuthService, useValue: authServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
