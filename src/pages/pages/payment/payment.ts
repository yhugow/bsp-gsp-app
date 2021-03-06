import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public paymentList : any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.loadPayment();
  }

  loadPayment() {
    this.api.getPayment().subscribe( (res : any) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.paymentList = res.responseData;
      }
    })
  }

}
