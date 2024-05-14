import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProducttypeListComponent } from "./product/producttype-list/producttype-list.component";
import { ProducttypeCreateComponent } from "./product/producttype-create/producttype-create.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { FarmerListComponent } from "./farm/farmer-list/farmer-list.component";
import { FarmListComponent } from "./farm/farm-list/farm-list.component";
import { ProductCreateComponent } from "./product/product-create/product-create.component";
import { FarmerCreateComponent } from "./farm/farmer-create/farmer-create.component";
import { FarmCreateComponent } from "./farm/farm-create/farm-create.component";
import { AnimalCreateComponent } from "./farm/animal-create/animal-create.component";
import { AnimalListComponent } from "./farm/animal-list/animal-list.component";

const routes: Routes = [
    { path: "", redirectTo: "animals", pathMatch: "full" },
    { path: "producttypes", component: ProducttypeListComponent},
    { path: "producttypes/:id", component: ProducttypeCreateComponent},
    { path: "products", component:ProductListComponent},
    { path: "products/:id", component:ProductCreateComponent},
    { path: "farmers", component: FarmerListComponent},
    { path: "farmers/:id", component: FarmerCreateComponent},
    { path: "farms", component: FarmListComponent},
    { path: "farms/:id", component: FarmCreateComponent},
    { path: "animals/:id", component: AnimalCreateComponent},
    { path: "animals", component: AnimalListComponent}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }