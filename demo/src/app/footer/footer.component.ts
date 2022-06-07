import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isUserLogin=JSON.parse(localStorage.getItem('isUserLoggedIn'));
  isProviderLogin=JSON.parse(localStorage.getItem('isProviderLoggedIn'));

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  account(){
    if(this.isUserLogin==true){
      this.route.navigateByUrl('/booking-history')
    }
    else if(this.isProviderLogin==true){
      this.route.navigateByUrl('/provider-history')
    }
    else{
      this.route.navigateByUrl('/')
    }
  }

  review(){
    if(this.isUserLogin==true){
      this.route.navigateByUrl('/cust-rating')
    }
    else if(this.isProviderLogin==true){
      this.route.navigateByUrl('/provider-history')
    }
    else{
      this.route.navigateByUrl('/')
    }
  }


  rating(){
    if(this.isUserLogin==true){
      this.route.navigateByUrl('/app-customerratings')
    }
    else if(this.isProviderLogin==true){
      this.route.navigateByUrl('/provider-history')
    }
    else{
      this.route.navigateByUrl('/')
    }

  }
}
