import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any [] = [];

  constructor(private api: ApiService) { }

  // runs the function immediately when the page loads 
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.api.getJsonProducts().subscribe(resp => {
      this.products = resp;
    })
  }
}
