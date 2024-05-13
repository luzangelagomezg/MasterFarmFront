import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalListComponent } from "./animal/animal-list/animal-list.component";
import { ProducttypeListComponent } from "./product/producttype-list/producttype-list.component";
import { ProducttypeCreateComponent } from "./product/producttype-create/producttype-create.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { FarmerListComponent } from "./farm/farmer-list/farmer-list.component";
import { FarmListComponent } from "./farm/farm-list/farm-list.component";
import { ProductCreateComponent } from "./product/product-create/product-create.component";
import { FarmerCreateComponent } from "./farm/farmer-create/farmer-create.component";

const routes: Routes = [
    { path: "", redirectTo: "animals", pathMatch: "full" },
    { path: "animals", component: AnimalListComponent},
    { path: "producttypes", component: ProducttypeListComponent},
    { path: "producttypes/:id", component: ProducttypeCreateComponent},
    { path: "products", component:ProductListComponent},
    { path: "products/:id", component:ProductCreateComponent},
    { path: "farmers", component: FarmerListComponent},
    { path: "farmers/:id", component: FarmerCreateComponent},
    { path: "farms", component: FarmListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }