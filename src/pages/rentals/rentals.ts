import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-rentals',
  templateUrl: 'rentals.html',
})
export class RentalsPage implements OnInit{

  public title: string;
  isLoggedIn: boolean = false;

	constructor(private paramsCtrl: NavParams, private storage: Storage, private navCtrl: NavController) {
		this.title = this.paramsCtrl.get('title');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentalsPage');
  }

  public navigate(): void {
		// Now we can set that page as root
		this.navCtrl.push(LoginPage, { title: 'Login' });
  }
  
  ngOnInit() {
    this.storage.get('userDetails').then((user) => {
			console.log('User is', user);
			if(user) {
				this.isLoggedIn = true;
			}
		});
  }
}
