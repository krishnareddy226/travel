import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Ionic references
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MaterialModule } from './material.module';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { PackagesPage } from '../pages/packages/packages';
import { ServicesPage } from '../pages/services/services';
import { RentalsPage } from '../pages/rentals/rentals';
import { BookingPage } from '../pages/booking/booking';
import { GalleryPage } from '../pages/gallery/gallery';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { HeaderPage } from '../pages/header/header';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PackagesPage,
    ServicesPage,
    RentalsPage,
    BookingPage,
    GalleryPage,
    ContactPage,
    AboutPage,
    HeaderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MaterialModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PackagesPage,
    ServicesPage,
    RentalsPage,
    BookingPage,
    GalleryPage,
    ContactPage,
    AboutPage,
    HeaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
