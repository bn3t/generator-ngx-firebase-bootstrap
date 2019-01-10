import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { firebaseConfig } from "environments/firebaseConfig";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from "app/shared/auth.service";
import { LoginUserComponent } from "app/login-user/login-user.component";
import { DisplayUserComponent } from "app/display-user/display-user.component";
import { RegisterUserComponent } from "app/register-user/register-user.component";
import { AlertModule } from "ngx-bootstrap";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page.component";
import { RegisterPageComponent } from "./pages/register-page.component";
import { AllInOnePageComponent } from "./pages/all-in-one-page.component";
import { LoginPageComponent } from "./pages/login-page.component";
import { LoggedInGuard } from "app/shared/logged-in-guard";
import { DashboardPageComponent } from './pages/dashboard-page.component';

const routes: Routes = [
    { path: 'register', component: RegisterPageComponent },
    { path: 'all-in-one', component: AllInOnePageComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'dashboard', component: DashboardPageComponent, canActivate: [LoggedInGuard] },
    { path: '', component: HomePageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        DisplayUserComponent,
        LoginUserComponent,
        RegisterUserComponent,
        ResetPasswordComponent,
        HomePageComponent,
        RegisterPageComponent,
        AllInOnePageComponent,
        LoginPageComponent,
        DashboardPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AlertModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, "<%= name %>"),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        RouterModule.forRoot(routes)
    ],
    providers: [AuthService, LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
