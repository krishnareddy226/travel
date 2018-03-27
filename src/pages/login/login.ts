import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Ionic
import { NavController } from "ionic-angular";
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit  {

  public title: string;
  form: FormGroup;                    
  private formSubmitAttempt: boolean;

	constructor(private paramsCtrl: NavParams,private navCtrl: NavController,
    private fb: FormBuilder, private authService: AuthServiceProvider,
    private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.title = this.paramsCtrl.get('title');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit() {   
    this.form = this.fb.group({     
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      let loader = this.loadingCtrl.create({
        content: 'Please wait...',
        dismissOnPageChange: true
      }).present().then(() =>{
        let islogged = this.authService.login(this.form.value); 
        if(islogged){
          let toast = this.toastCtrl.create({
            message: 'Login successfully',
            duration: 3000
          });
          toast.present();
          this.navCtrl.setRoot(HomePage, { title: 'Home' });        }
      }, err => loader.dismiss())

    }
    this.formSubmitAttempt = true;             
  }
  
  // public back(): void{
  // 	this.navCtrl.setRoot(HomePage, { title: 'Home' });
  // }
}
