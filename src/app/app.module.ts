import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {FooterComponent} from './products/shares/footer/footer.component';
import {NavbarComponent} from './products/shares/navbar/navbar.component';
import {BikeService} from "./services/bike.service";
import {CharLimitPipe} from "./products/shares/pipes/char-limit.pipe";
import {ProductsModule} from "./products/products.module";
import {appRouting} from "./app-routing.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductsModule,
        appRouting
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
