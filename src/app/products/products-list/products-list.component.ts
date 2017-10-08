import { Component, OnInit } from '@angular/core';
import {Bike} from "../../store-data/bike.model";
import {BikeService} from "../../services/bike.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public bikes: Bike[];
  errorMessage: string;

  constructor(private _getBikes: BikeService) {
  }

  ngOnInit() {
    this.getAllBikes()
  }

  public getAllBikes(){
    this._getBikes.getBikesInfo()
        .subscribe(
            (data) => this.bikes = data,
            (error) => this.errorMessage = <any>error

        )
  }

}
