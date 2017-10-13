import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import {Bike} from "../store-data/bike.model";
import {BikeStorage} from "../store-data/store.model";

@Injectable()
export class BikeService {
    // public bike  = new BikeStorage();
    public bike;
    public bikeStoreArray;

    constructor(private _http: Http) {
        if (this.bikeStoreArray == null && this.bike == undefined) {
            this.bikeStoreArray = [];
            this.bike = new BikeStorage();
        } else {
            this.bikeStoreArray = JSON.parse(localStorage.getItem('data'));
        }
    }

    public getBikesInfo(): Observable<Bike[]> {
        return this._http.get('src/app/store-data/road-bikes.json')
            .map((response: Response) => <Bike[]>response.json())
    }

    public getBikeDetails(id: string): Observable<Bike> {
        return this.getBikesInfo()
            .map((bike: Bike[]) => bike.find(bike => bike.id === id))
    }

    public saveToLocalStorage() {
        this.bikeStoreArray.push(this.bike);
        localStorage.setItem('data', JSON.stringify(this.bikeStoreArray))
    }

}

