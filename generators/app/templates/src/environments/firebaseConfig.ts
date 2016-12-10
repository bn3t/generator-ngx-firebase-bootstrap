
import {AuthMethods, AuthProviders} from "angularfire2";


export const firebaseConfig = {
    // Paste all this from the Firebase console...
    apiKey: "<%= apiKey %>",
    authDomain: "<%= authDomain %>",
    databaseURL: "<%= databaseURL %>",
    storageBucket: "<%= storageBucket %>",
    messagingSenderId: "<%= messagingSenderId %>"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
