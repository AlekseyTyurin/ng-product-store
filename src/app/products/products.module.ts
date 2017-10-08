import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {productsRouting} from './products-routing.module';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {NavbarComponent} from "./shares/navbar/navbar.component";
import {FooterComponent} from "./shares/footer/footer.component";
import {CharLimitPipe} from "./shares/pipes/char-limit.pipe";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsComponent} from "./products.component";
import {HttpModule} from "@angular/http";
import {BikeService} from "../services/bike.service";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        productsRouting
    ],
    declarations: [
        ProductDetailsComponent,
        ProductsComponent,
        NavbarComponent,
        FooterComponent,
        CharLimitPipe,
        ProductsListComponent
    ],
    providers: [
        BikeService
    ],
})
export class ProductsModule {
}
