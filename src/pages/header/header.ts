import { Component , OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderPage implements OnInit{
	isLoggedIn: boolean = false;
	userDetails : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,
    private actionsheetCtrl: ActionSheetController,private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }

	public navigate(): void {
		this.navCtrl.push(LoginPage, { title: 'Login' });
  }
  
  openMenu() {
		let actionSheet = this.actionsheetCtrl.create({
		  title: this.userDetails.user,
		  cssClass: 'action-sheets-basic-page',
		  buttons: [
			{
			  text: 'My Profile',
			  handler: () => {
				console.log('Profile clicked');
			  }
			},
			{
			  text: 'My Bookings',
			  handler: () => {
				console.log('Bookings clicked');
			  }
			},
			{
			  text: 'Favorites',
			  handler: () => {
				console.log('Favorite clicked');
			  }
			},
			{
				text: 'Log Out',
				handler: () => {
					this.storage.remove("userDetails");
					let toast = this.toastCtrl.create({
						message: 'Logout successfully',
						duration: 1000
					  });
					  toast.present();
					this.isLoggedIn = false;
				}
			  }
		  ]
		});
		actionSheet.present();
		}
 
  ngOnInit() {
    this.storage.get('userDetails').then((user) => {
			console.log('User is', user);
			if(user) {
				this.isLoggedIn = true;
			}
			this.userDetails = user;
		});	
  }
}
