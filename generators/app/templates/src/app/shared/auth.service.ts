import {Injectable, Inject} from "@angular/core";
import {User} from "firebase";
import {AngularFireAuth, AuthProviders, AuthMethods, AngularFire, FirebaseApp} from "angularfire2";
import {UserInfo} from "./user-info";
import {Observable, Subject, ReplaySubject, AsyncSubject} from "rxjs";
import Auth = firebase.auth.Auth;

@Injectable()
export class AuthService {
    private userInfoSubject: ReplaySubject<UserInfo>;
    private auth: User;
    private firebaseAuth: Auth;

    constructor(private angularFireAuth: AngularFireAuth, @Inject(FirebaseApp) firebaseApp: any) {
        this.initUserInfoSubject();
        // console.log("AuthService");
        this.firebaseAuth = firebaseApp.auth();

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

    login(email: string, password: string): Observable<string> {
        let result = new Subject<string>();
        this.initUserInfoSubject();
        this.angularFireAuth.login({email: email, password: password})
            .then(() => result.next("success"))
            .catch(err => result.error(err));
        return result.asObservable();
    }

    private initUserInfoSubject() {
        this.userInfoSubject = new ReplaySubject<UserInfo>(1);
    }

    currentUser(): Observable<UserInfo> {
        return this.userInfoSubject.asObservable();
    }

    logout(): Observable<string> {
        let result = new Subject<string>();
        this.initUserInfoSubject();
        this.angularFireAuth.logout()
            .then(() => result.next("success"))
            .catch(err => result.error(err));
        return result.asObservable();
    }

    isLoggedIn(): Observable<boolean> {
        let isLoggedInBS = new AsyncSubject<boolean>();
        this.userInfoSubject.subscribe(ui => {
            // console.log("isLoggedIn: anonymous=" + ui.isAnonymous);
            isLoggedInBS.next(!ui.isAnonymous);
            isLoggedInBS.complete();
        });
        return isLoggedInBS;
    }

    updateDisplayName(displayName: string): Observable<string> {
        let result = new Subject<string>();
        this.auth.updateProfile({displayName: displayName, photoURL: null}).then(a => {
            result.next("onSuccess");
        }).catch(err => result.error(err));
        return result;
    }

    createUser(email: string, password: string, displayName: string): Observable<string> {
        let result = new Subject<string>();
        this.angularFireAuth.createUser({email: email, password: password})
            .then(auth => {
                auth.auth.updateProfile({displayName: displayName, photoURL: null});
                result.next("success");
            })
            .catch(err => result.error(err));
        return result.asObservable();
    }

    updateEmail(email: string): Observable<string> {
        let result = new Subject<string>();
        this.auth.updateEmail(email).then(a => {
            result.next("success");
        }).catch(err => result.error(err));
        return result.asObservable();
    }

    updatePassword(password: string): Observable<string> {
        let result = new Subject<string>();
        this.auth.updatePassword(password).then(a => {
            result.next("success");
        }).catch(err => result.error(err));
        return result.asObservable();
    }

    sendPasswordResetEmail(email: string): Observable<string> {
        let result = new Subject<string>();
        this.firebaseAuth.sendPasswordResetEmail(email)
            .then(() => result.next("success"))
            .catch(err => result.error(err));
        return result;
    }

    loginViaProvider(provider: string): Observable<String> {
        let result = new Subject<string>();
        if (provider === "google") {
            this.angularFireAuth
                .login({provider: AuthProviders.Google, method: AuthMethods.Popup})
                .then(auth => result.next("success"))
                .catch(err => result.error(err));
            return result.asObservable();
        }
        else if (provider === "twitter") {
            this.angularFireAuth
                .login({provider: AuthProviders.Twitter, method: AuthMethods.Popup})
                .then(auth => result.next("success"))
                .catch(err => result.error(err));
            return result.asObservable();
        }
        result.error("Not a supported authentication method: " + provider)
        return result.asObservable();
    }
}
