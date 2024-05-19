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
import { PlotListComponent } from "./farm/plot-list/plot-list.component";
import { PlotCreateComponent } from "./farm/plot-create/plot-create.component";
import { PlottypeListComponent } from "./farm/plottype-list/plottype-list.component";
import { PlottypeCreateComponent } from "./farm/plottype-create/plottype-create.component";
import { AgriculturaloperationtypeCreateComponent } from "./farm/agriculturaloperationtype-create/agriculturaloperationtype-create.component";
import { AgriculturaloperationtypeListComponent } from "./farm/agriculturaloperationtype-list/agriculturaloperationtype-list.component";

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
    { path: "animals", component: AnimalListComponent},
    { path: "plots", component: PlotListComponent},
    { path: "plots/:id", component: PlotCreateComponent},
    { path: "plottypes", component: PlottypeListComponent},
    { path: "plottypes/:id", component: PlottypeCreateComponent},
    { path: "agriculturaloperationtypes", component: AgriculturaloperationtypeListComponent},
    { path: "agriculturaloperationtypes/:id", component: AgriculturaloperationtypeCreateComponent}

   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }