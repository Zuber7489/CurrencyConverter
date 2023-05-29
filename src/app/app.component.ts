import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  amount:number=0;
  fromCurrency: string='USD';
  toCurrency: string='INR';
  convertedAmount: any;
  exchangeRates:any;
  conversionRate:any;
  NewConversionRate:any;

  constructor(public http:HttpClient){}


  convert(){
 
    this.http.get<any>(`https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`).subscribe(data => {
       this.exchangeRates = data.rates;
       this.conversionRate = this.exchangeRates[this.toCurrency];

      this.convertedAmount = this.amount * this.conversionRate;
      this.NewConversionRate=this.convertedAmount.toFixed(2)
      console.log(data)
    });
  }
  }




