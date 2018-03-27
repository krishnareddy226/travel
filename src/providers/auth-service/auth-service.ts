// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../../interfaces/user';
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthServiceProvider {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private storage: Storage) {}

  login(user: User){
    if (user.userName !== '' && user.password != '' ) {
      this.storage.set('userDetails', {'user':user.userName,'password': user.password});
      console.log(" userDetails " + this.storage.get('userDetails'));
      this.loggedIn.next(true);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.storage.remove('userDetails');                            
    this.loggedIn.next(false);
  }

  getUserDetails() {
    this.storage.get('userDetails').then((user) => {
      console.log('User is', user);
      return user;
    });
    // return this.storage.get('userDetails')
  }

}
