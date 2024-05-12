import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalListComponent } from "./animal/animal-list/animal-list.component";
import { ProducttypeListComponent } from "./product/producttype-list/producttype-list.component";
import { ProducttypeCreateComponent } from "./product/producttype-create/producttype-create.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { FarmerListComponent } from "./farm/farmer-list/farmer-list.component";

const routes: Routes = [
    { path: "", redirectTo: "animals", pathMatch: "full" },
    { path: "animals", component: AnimalListComponent},
    { path: "producttypes", component: ProducttypeListComponent},
    { path: "producttypes/:id", component: ProducttypeCreateComponent},
    { path: "products", component:ProductListComponent},
    { path: "farmers", component: FarmerListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }