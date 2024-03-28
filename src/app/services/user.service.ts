import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
  }

  public setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  public getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }
}
