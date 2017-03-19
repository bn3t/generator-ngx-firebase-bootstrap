import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ResetPasswordComponent} from "./reset-password.component";
import {AuthServiceStub} from "app/shared/auth.service.stub";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "app/shared/auth.service";

describe('ResetPasswordComponent', () => {
    let component: ResetPasswordComponent;
    let fixture: ComponentFixture<ResetPasswordComponent>;

    beforeEach(async(() => {
        let authServiceStub = new AuthServiceStub(true);

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [ResetPasswordComponent],
            providers: [
                {provide: AuthService, useValue: authServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
