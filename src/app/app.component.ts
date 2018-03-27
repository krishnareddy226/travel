import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ServicesPage } from './../pages/services/services';
import { PackagesPage } from './../pages/packages/packages';
import { RentalsPage } from './../pages/rentals/rentals';
import { GalleryPage } from './../pages/gallery/gallery';
import { ContactPage } from './../pages/contact/contact';
import { BookingPage } from './../pages/booking/booking';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  open: boolean = false;
  rootPage: any = HomePage;
  pages: Array<{iconName: string, title: string, component: any, subItems: Array<any>}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
              public splashScreen: SplashScreen,private app: App,
              ) {
    this.initializeApp();
    this.app.viewWillEnter.subscribe(
			() => {
				  this.nav.viewDidEnter.subscribe(
						view => {
              console.log('Current opened view is : ' + view.name);
						}
					)
				}
			)

			this.pages = [
      // { title: 'Home', component: HomePage },
      // // { title: 'List', component: ListPage },
      // { title: 'About', component: AboutPage },
      // { title: 'List', component: ListPage },
    ];

		this.pages.push({
			iconName: 'information-circle',
			title: 'About',
      component: AboutPage,
      subItems: []
		});

		this.pages.push({
      iconName: 'information-circle',
      title: 'Services',
      component: ServicesPage,
			subItems: [
				{
					iconName: 'car',
					title: 'Cab Travels ',
					component: ServicesPage
				},
				{
					iconName: 'bus',
					title: 'Tempo Travels',
					component: ServicesPage
				},
				{
					iconName: 'bus',
					title: 'Mini Bus Travel',
					component: ServicesPage
				},
				{
					iconName: 'bus',
					title: 'Bus Travel',
					component: ServicesPage
				},
				{
					iconName: 'bus',
					title: 'Corporate Travel',
					component: ServicesPage
				},
				{
					iconName: 'bus',
					title: 'Local Travel',
					component: ServicesPage
				}
			]
		});

		this.pages.push({
			iconName: 'apps',
			title: 'Packages',
      component: PackagesPage,
      subItems: []
		});

		this.pages.push({
			iconName: 'bowtie',
			title: 'Rentals',
      component: RentalsPage,
      subItems: []      
		});

		this.pages.push({
			iconName: 'images',
			title: 'Gallery',
      component: GalleryPage,
      subItems: []
		});

		this.pages.push({
			iconName: 'contacts',
			title: 'Contact',
      component: ContactPage,
      subItems: []
		});

		this.pages.push({
			iconName: 'cart',
			title: 'Booking',
      component: BookingPage,
      subItems: []
		});

		 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
			this.open = false;
      this.nav.push(page.component);
  }

  setHome() {
		this.open = false;
    this.nav.setRoot(HomePage);
	}
	
	toggleSection() {
			this.open = !this.open;
	}

}
