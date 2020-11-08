import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import User = firebase.User;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  connectedUser: User;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user) => (this.connectedUser = user));
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      if (!email || !password) {
        throw new Error('Invalid email and/or password');
      }
      await this.auth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      return false;
    }
  }

  getConnectedUser(): User {
    return this.connectedUser;
  }
}
