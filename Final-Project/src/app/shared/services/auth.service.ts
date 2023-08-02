import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /** Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  /**
   * @description connects with firebase to validate if user has an account - if true navigates to dashboard else alert box
   * @param email : validated email string
   * @param password : validated password string
   * @returns afAuth of type  AngularFireAuth 
   */
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(this.userData));
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
        return error.message;
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.router.navigate(['']);
      })
      .catch((error) => {
        // window.alert(error.message);
      });
  }
  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
    });
  }
AuthLogin(provider: any) {
  return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.router.navigate(['dashboard']);
      this.SetUserData(result.user);
    })
    .catch((error) => {
      window.alert(error);
    });
}
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
  CibilScore()
  {
    this.router.navigate(['app-cibil-score1'])
  }
  HomePage()
  {
    this.router.navigate(['dashboard'])
  }
  ApiData()
  {
    this.router.navigate(['app-api-data'])
  }
  NavigationBar()
  {
    this.router.navigate(['app-navigation-bar'])
  }
  Testing()
  {
    this.router.navigate(['app-testing'])
  }
  HiChart()
  {
    this.router.navigate(['app-hi-chart'])
  }
  LoanPage()
  {
    this.router.navigate(['app-loan-page'])
  }
  EditUser(){
  
      this.router.navigate(['app-edit-user'])
   
  }
  SignInPage()
  {
    this.router.navigate(['app-sign-in'])
  }
  ShowDetails()
  {
    this.router.navigate(['app-show-user-details'])
  }
}
