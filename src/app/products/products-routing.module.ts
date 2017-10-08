import {Routes, RouterModule} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {ModuleWithProviders} from "@angular/core";
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {NewProductComponent} from "./new-product/new-product.component";

const productsRoutes: Routes = [{
    path: '', component: ProductsComponent,
    children: [
        {
            path: '',
            component: ProductsListComponent
        },
        {
            path: 'bike/:id',
            component: ProductDetailsComponent
        },
        {
            path: 'create-new',
            component: NewProductComponent
        }
    ]
}
]

export const productsRouting: ModuleWithProviders = RouterModule.forChild(productsRoutes);