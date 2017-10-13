import {Component, OnInit} from "@angular/core";
import {BikeService} from "../../services/bike.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
    public model: any = {};
    public errorMessage: any;
    public errorMsg: boolean;
    public uploaded: boolean;
    public productImageUrl: string = '';
    public loaded: boolean;

    constructor(private _saveNewBike: BikeService,
                private router: Router) {
    }

    ngOnInit() {

    }

    public uploadProductImage(e: any) {
        let fileList = e.target.files;
        if (fileList.length > 0) {
            let productFile = fileList[fileList.length - 1];
            this.model.driverLicenseFile = productFile;
            let reader = new FileReader();
            reader.onload = this._handleReaderLoaded;
            reader.readAsDataURL(productFile);
            if (productFile.size >= 10485761) {
                this.errorMessage = "Your License file more then 10Mb." +
                    " Please resize or try another one.";
                this.errorMsg = true;
            }
        }
        this.uploaded = true;
    }

    _handleReaderLoaded = (e) => {
        let reader = e.target;
        this.productImageUrl = reader.result;
        this.loaded = true;
        this._productPhotoUrl(this.productImageUrl)
    };

    _productPhotoUrl(value) {
        this._saveNewBike.bike.bikeImageUrl = value;
    }

    set _productname(value: string) {
        this._saveNewBike.bike.productName = value;
    }

    set _price(value: number) {
        this._saveNewBike.bike.productPrice = value;
    }

    set _description(value: string) {
        this._saveNewBike.bike.description = value;
    }

    validate(value) {
        value < 0 ? this._price = 0 : this._price = value;
    }

    saveNewProduct() {
        this._saveNewBike.saveToLocalStorage();
        this.router.navigateByUrl('/');
        this._saveNewBike.bike.loaded = true;
    }
}
