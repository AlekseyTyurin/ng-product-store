import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import {Bike} from "../store-data/bike.model";

@Injectable()
export class BikeService {

  constructor(private _http: Http) { }

  public getBikesInfo(): Observable<Bike[]> {
      return this._http.get('src/app/store-data/road-bikes.json')
          .map((response: Response) => <Bike[]>response.json())
  }

  public getBikeDetails(id: string): Observable<Bike>{
      return this.getBikesInfo()
          .map((bike: Bike[]) => bike.find(bike => bike.id === id))
  }
}

