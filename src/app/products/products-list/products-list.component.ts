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
    errorMessage: string;
    loadedData: boolean = false;

    constructor(private _getBikes: BikeService,) {
    }

    ngOnInit() {
        this.getAllBikes()
        console.log(this._bikeImageUrl)
        console.log(this._description)
        console.log(this._productName)
    }

    public getAllBikes() {
        this._getBikes.getBikesInfo()
            .subscribe(
                (data) => this.bikes = data,
                (error) => this.errorMessage = <any>error
            )
    }

    get _bikeImageUrl(): string {
        return this._getBikes.bike.bikeImageUrl;
    }

    get _description(): string {
        return this._getBikes.bike.description;
    }

    get _productName(): string {
        return this._getBikes.bike.productName;
    }

    get _bikePrice(): string {
        return this._getBikes.bike.productPrice;
    }

    get _loaded():boolean {
        return this._getBikes.bike.loaded;
    }

}
