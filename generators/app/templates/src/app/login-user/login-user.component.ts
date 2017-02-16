import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "app/shared/auth.service";
import {FormBuilder, Validators, AbstractControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
    form: FormGroup;
    email: AbstractControl;
    password: AbstractControl;

    constructor(private authService: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    login(value: any) {
        if (this.form.valid) {
            this.authService.login(this.email.value, this.password.value);
            this.form.reset();
        }
    }

    loginVia(provider: string) {
        this.authService.loginViaProvider(provider);
    }
}