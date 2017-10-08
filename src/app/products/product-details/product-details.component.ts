import {Component, OnInit, OnDestroy} from '@angular/core';
import {Bike} from "../../store-data/bike.model";
import {BikeService} from "../../services/bike.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

    public bike: Bike;
    private errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _getBikes: BikeService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


    public getBikeDetails(id: string){
        return this._getBikes.getBikeDetails(id)
            .subscribe(
                (data) => this.bike = data,
                (error) => this.errorMessage = <any>error
            )
    }
}
