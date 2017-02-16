/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {LoginUserComponent} from "./login-user.component";
import {AuthService} from "app/shared/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AsyncSubject, Observable, ReplaySubject} from "rxjs";
import {UserInfo} from "app/shared/user-info";
import {AuthServiceStub} from "app/shared/auth.service.stub";

describe('LoginUserComponent', () => {
    let component: LoginUserComponent;
    let fixture: ComponentFixture<LoginUserComponent>;

    beforeEach(async(() => {
        let authServiceStub = new AuthServiceStub(true);

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [LoginUserComponent],
            providers: [
                {provide: AuthService, useValue: authServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
