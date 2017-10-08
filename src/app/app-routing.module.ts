import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ProductsComponent} from "./products/products.component";


const appRoutes: Routes = [
  {path: '', component: ProductsComponent},

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);