import {Injectable, Inject} from "@angular/core";
import {User} from "firebase";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {UserInfo} from "./user-info";
import {Observable, Subject, ReplaySubject, AsyncSubject} from "rxjs";

@Injectable()
export class AuthService {
    private userInfoSubject: ReplaySubject<UserInfo>;
    private user: User;
    
    constructor(private angularFireAuth: AngularFireAuth) {
        this.initUserInfoSubject();
        this.angularFireAuth.authState.subscribe(user => {
            // console.log("user: ", JSON.stringify(user));
            this.user = user;
            let userInfo = new UserInfo();
            if (user != null) {
                
                userInfo.isAnonymous = user.isAnonymous;
                userInfo.email = user.email;
                userInfo.displayName = user.displayName;
                userInfo.providerId = user.providerId;
                userInfo.photoURL = user.photoURL;
                userInfo.uid = user.uid;
            } else {
                this.user = null;
                userInfo.isAnonymous = true;
            }
            this.userInfoSubject.next(userInfo);
        });
    }

    login(email: string, password: string): Observable<string> {
        let result = new Subject<string>();
        this.initUserInfoSubject();
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
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
        this.angularFireAuth.auth.signOut()
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
        this.user.updateProfile({displayName: displayName, photoURL: null})
            .then(() => {result.next("success")})
            .catch(err => result.error(err));
        return result;
    }

    createUser(email: string, password: string, displayName: string): Observable<string> {
        let result = new Subject<string>();
        this.angularFireAuth.authState.subscribe(user => {
            // console.log("Update: ", user);
            if (user != null) {
                user.updateProfile({displayName: displayName, photoURL: null});
            }
        });
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                //auth.auth.updateProfile({displayName: displayName, photoURL: null});
                result.next("success");
            })
            .catch(err => result.error(err));
        
        return result.asObservable();
    }

    updateEmail(email: string): Observable<string> {
        let result = new Subject<string>();
        this.user.updateEmail(email)
            .then(() => result.next("success"))
            .catch(err => result.error(err));
        return result.asObservable();
    }

    updatePassword(password: string): Observable<string> {
        let result = new Subject<string>();
        this.user.updatePassword(password)
                .then(a => {
                    result.next("success");
                })
                .catch(err => result.error(err));
        return result.asObservable();
    }

    sendPasswordResetEmail(email: string): Observable<string> {
        let result = new Subject<string>();
        this.angularFireAuth.auth.sendPasswordResetEmail(email)
            .then(() => result.next("success"))
            .catch(err => result.error(err));
        return result;
    }

    loginViaProvider(provider: string): Observable<String> {
        let result = new Subject<string>();
        if (provider === "google") {
            let provider = new firebase.auth.GoogleAuthProvider();
            this.angularFireAuth
                .auth
                .signInWithPopup(provider)
                .then(auth => result.next("success"))
                .catch(err => result.error(err));
            return result.asObservable();
        }
        else if (provider === "twitter") {
            let provider = new firebase.auth.TwitterAuthProvider();
            this.angularFireAuth
                .auth
                .signInWithPopup(provider)
                .then(auth => result.next("success"))
                .catch(err => result.error(err));
            return result.asObservable();
        }
        result.error("Not a supported authentication method: " + provider)
        return result.asObservable();
    }
}
