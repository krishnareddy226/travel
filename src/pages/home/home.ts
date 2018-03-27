// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

// Ionic
import { NavController} from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from 'ionic-angular';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { LoginPage } from '../login/login';

// Side Menu Component
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {
	slideImages: any;
	isLoggedIn: boolean = false;
	form: FormGroup;                    
  	private formSubmitAttempt: boolean; 
	@ViewChild(Slides) slides: Slides;
	vechiclesList: any;
	userDetails : any;
	splash: boolean = true;

	constructor(private navCtrl: NavController,
				private fb: FormBuilder,
				private loadingCtrl: LoadingController, private toastCtrl: ToastController,
				private storage: Storage,
				private actionsheetCtrl: ActionSheetController,
				private statusBar: StatusBar,
				private splashScreen: SplashScreen) { 
				}

	public navigate(): void {
		this.navCtrl.push(LoginPage, { title: 'Login' });
	}

	ngOnInit() {

		this.form = this.fb.group({     
			userName: ['', Validators.required],
			mobileNo: ['', Validators.required],
			emailId: ['', Validators.required],
			vehicleType: ['', Validators.required],
			pickupPoint: ['', Validators.required],
			dropPoint: ['', Validators.required],
			tripDetails: []
		  });

		this.slideImages = [
			'https://admin.tejastravels.com/uploads/homepage_images/272302406-Tejas_bus_service_Bangalore.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/724826171-luxury-minibus-hire-bangalore.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/1511117478-25_seater_mini_coach_luxury.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/1354549694-25-seater-bus-hire-in-bangalore.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/1898046620-25-seater-bus-rentals-bangalore.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/1689630893-18_19_seater_executive_Mini_bus_AC_Non_AC.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/2059369083-bus-hire-in-bangalore.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/149558438-bus-minibus-tempo-traveller-rentals-in-bangalore.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/304214193-sai-shiva.jpg',
			'https://admin.tejastravels.com/uploads/homepage_images/1733566528-tempo-traveller-hire-bangalore.jpg'
		]

		this.vechiclesList = [
			'Indica Ac',
			'Indigo A/c',
			'Dzire A/c',
			'ETIOS A/c',
			'TAVERA A/c'

		]

    this.storage.get('userDetails').then((user) => {
			console.log('User is', user);
			if(user) {
				this.isLoggedIn = true;
			}
			this.userDetails = user;
		});				

	}

	ngAfterViewInit() {
		this.slides.freeMode = true;

	}

	goToSlide() {
		this.slides.slideTo(2, 500);
	}

	isFieldInvalid(field: string) { 
		return (
		  (!this.form.get(field).valid && this.form.get(field).touched) ||
		  (this.form.get(field).untouched && this.formSubmitAttempt)
		);
	}

	onSubmit() {
		if (this.form.valid) {
			this.formSubmitAttempt = true;  
			let loader = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 100,
				dismissOnPageChange: true
			  }).present().then(() =>{
				let toast = this.toastCtrl.create({
					message: 'Submitted successfully',
					duration: 1000
				  });
				  toast.present();
				  this.form.reset();
				  this.navCtrl.push(HomePage);
				}, err => loader.dismiss())
				   
	 	}
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
		
		ionViewDidLoad() {
			this.statusBar.styleLightContent();
			setTimeout(() => this.splashScreen.hide(), 3000);
		}

}

