import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage implements OnInit{

  public title: string;
  isLoggedIn: boolean = false;

	constructor(private paramsCtrl: NavParams, private storage: Storage) {
		this.title = this.paramsCtrl.get('title');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
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
