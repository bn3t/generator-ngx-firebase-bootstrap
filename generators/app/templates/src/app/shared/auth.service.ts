import {Injectable, EventEmitter, Output} from "@angular/core";
import {User} from "firebase";
import {AngularFireAuth, AuthProviders, AuthMethods} from "angularfire2";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {UserInfo} from "./user-info";
import {Observable, Subject, ReplaySubject, AsyncSubject} from "rxjs";

@Injectable()
export class AuthService {
    private userInfoSubject: ReplaySubject<UserInfo>;
    private auth: User;

    constructor(private angularFireAuth: AngularFireAuth) {
        this.initUserInfoSubject();
        // console.log("AuthService");
        angularFireAuth.subscribe(auth => {
            // console.log("auth: ", JSON.stringify(auth));
            let userInfo = new UserInfo();
            if (auth != null) {
                this.auth = auth.auth;
                userInfo.isAnonymous = auth.auth.isAnonymous;
                userInfo.email = auth.auth.email;
                userInfo.displayName = auth.auth.displayName;
                userInfo.providerId = auth.auth.providerId;
                userInfo.photoURL = auth.auth.photoURL;
                userInfo.uid = auth.auth.uid;
            } else {
                this.auth = null;
                userInfo.isAnonymous = true;
            }
            this.userInfoSubject.next(userInfo);
        });
    }

    login(email: string, password: string) {
        // console.log("login: ", email);
        this.initUserInfoSubject();
        this.angularFireAuth.login({email: email, password: password});
    }

    private initUserInfoSubject() {
        this.userInfoSubject = new ReplaySubject<UserInfo>(1);
    }

    currentUser(): Observable<UserInfo> {
        return this.userInfoSubject.asObservable();
    }

    logout() {
        this.initUserInfoSubject();
        this.angularFireAuth.logout();
    }

    isLoggedIn(): Observable<boolean> {
        let isLoggedInBS = new AsyncSubject<boolean>();
        this.userInfoSubject.subscribe(ui => {
            // console.log("isLoggedIn: anonymous=" + ui.isAnonymous);
                isLoggedInBS.next(!ui.isAnonymous);
                isLoggedInBS.complete();
            // setTimeout(() => {
            // }, 0);
        });
        return isLoggedInBS;
    }

    updateDisplayName(displayName: string): Observable<string> {
        let result = new Subject<string>();
        //noinspection TypeScriptUnresolvedFunction
        this.auth.updateProfile({displayName: displayName, photoURL: null}).then(a => {
            result.next("success");
        }).catch(err => result.error(err));
        return result;
    }

    createUser(email: string, password: string, displayName: string) {
        //noinspection TypeScriptUnresolvedFunction
        this.angularFireAuth.createUser({email: email, password: password})
            .then(auth => auth.auth.updateProfile({displayName: displayName, photoURL: null}));
    }

    updateEmail(email: string): Observable<string> {
        let result = new Subject<string>();
        //noinspection TypeScriptUnresolvedFunction
        this.auth.updateEmail(email).then(a => {
            result.next("success");
        }).catch(err => result.error(err));
        return result.asObservable();
    }

    updatePassword(password: string): Observable<string> {
        let result = new Subject<string>();
        //noinspection TypeScriptUnresolvedFunction
        this.auth.updatePassword(password).then(a => {
            result.next("success");
        }).catch(err => result.error(err));
        return result.asObservable();
    }

    loginViaProvider(provider: string): Observable<String> {
        let result = new Subject<string>();
        if (provider === "google") {
            //noinspection TypeScriptUnresolvedFunction
            this.angularFireAuth
                .login({provider: AuthProviders.Google, method: AuthMethods.Popup})
                //noinspection TypeScriptUnresolvedFunction
                .  //noinspection TypeScriptUnresolvedFunction
                then(auth => result.next("success"))
                        .catch(err => result.error(err));
            return result.asObservable();
        }
        else if (provider === "twitter") {
            //noinspection TypeScriptUnresolvedFunction
            this.angularFireAuth
                .login({provider: AuthProviders.Twitter, method: AuthMethods.Popup})
                //noinspection TypeScriptUnresolvedFunction
                .  //noinspection TypeScriptUnresolvedFunction
                then(auth => result.next("success"))
                        .catch(err => result.error(err));
            return result.asObservable();
        }
        result.error("Not a supported authentication method: " + provider)
        return result.asObservable();
    }
}
