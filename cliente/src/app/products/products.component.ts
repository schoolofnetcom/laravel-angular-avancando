import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = {};

  constructor(private service: AppHttpService) { }

  ngOnInit() { }

  updateData(data: any) {
    this.products = data;
  }

  searched(data: any) {
    this.products = data;
  }

}
