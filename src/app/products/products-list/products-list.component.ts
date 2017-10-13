import {Component, OnInit} from "@angular/core";
import {Bike} from "../../store-data/bike.model";
import {BikeService} from "../../services/bike.service";

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    public bikes: Bike[];
    public bikesFromLocalStorage;
    errorMessage: string;
    _description;
    _bikeImageUrl;
    _productName;
    _productPrice;
    _loaded;

    constructor(private _getBikes: BikeService,) {

        this.bikesFromLocalStorage = JSON.parse(localStorage.getItem('data'));
        console.log(this.bikesFromLocalStorage);
        for (let i in this.bikesFromLocalStorage) {
            this._bikeImageUrl = this.bikesFromLocalStorage[i].bikeImageUrl;
            this._description = this.bikesFromLocalStorage[i].description;
            this._productName = this.bikesFromLocalStorage[i].productName;
            this._productPrice = this.bikesFromLocalStorage[i].productPrice;
            console.log(this._description)
        }
    }

    ngOnInit() {
        this.getAllBikes();
        if (this.bikesFromLocalStorage.description != ''){
            this._loaded = true;
        }
    }

    public getAllBikes() {
        this._getBikes.getBikesInfo()
            .subscribe(
                (data) => this.bikes = data,
                (error) => this.errorMessage = <any>error
            )
    }

}
