import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{
  pet: string;
  isLoggedIn: boolean = false;

  constructor(public navCtrl: NavController,  private storage: Storage  ) {
    this.pet = 'about';
  }

  ngOnInit() {
    this.storage.get('userDetails').then((user) => {
      console.log('User is', user);
      if(user) {
				this.isLoggedIn = true;
			}
    });	
  }
  
  public navigate(): void {
		
		// Now we can set that page as root
		this.navCtrl.push(LoginPage, { title: 'Login' });
	}
}
