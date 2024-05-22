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
import { CropListComponent } from "./farm/crop-list/crop-list.component";
import { CropCreateComponent } from "./farm/crop-create/crop-create.component";
import { AgriculturaloperationListComponent } from "./farm/agriculturaloperation-list/agriculturaloperation-list.component";
import { AgriculturaloperationCreateComponent } from "./farm/agriculturaloperation-create/agriculturaloperation-create.component";
import { HarvestrecordListComponent } from "./farm/harvestrecord-list/harvestrecord-list.component";
import { HarvestrecordCreateComponent } from "./farm/harvestrecord-create/harvestrecord-create.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard]},
    { path: "producttypes", component: ProducttypeListComponent, canActivate: [AuthGuard]},
    { path: "producttypes/:id", component: ProducttypeCreateComponent, canActivate: [AuthGuard]},
    { path: "products", component:ProductListComponent, canActivate: [AuthGuard]},
    { path: "products/:id", component:ProductCreateComponent, canActivate: [AuthGuard]},
    { path: "farmers", component: FarmerListComponent, canActivate: [AuthGuard]},
    { path: "farmers/:id", component: FarmerCreateComponent, canActivate: [AuthGuard]},
    { path: "farms", component: FarmListComponent, canActivate: [AuthGuard]},
    { path: "farms/:id", component: FarmCreateComponent, canActivate: [AuthGuard]},
    { path: "animals/:id", component: AnimalCreateComponent, canActivate: [AuthGuard]},
    { path: "animals", component: AnimalListComponent, canActivate: [AuthGuard]},
    { path: "plots", component: PlotListComponent, canActivate: [AuthGuard]},
    { path: "plots/:id", component: PlotCreateComponent, canActivate: [AuthGuard]},
    { path: "plottypes", component: PlottypeListComponent, canActivate: [AuthGuard]},
    { path: "plottypes/:id", component: PlottypeCreateComponent, canActivate: [AuthGuard]},
    { path: "agriculturaloperationtypes", component: AgriculturaloperationtypeListComponent, canActivate: [AuthGuard]},
    { path: "agriculturaloperationtypes/:id", component: AgriculturaloperationtypeCreateComponent, canActivate: [AuthGuard]},
    { path: "crops", component: CropListComponent, canActivate: [AuthGuard]},
    { path: "crops/:id", component: CropCreateComponent, canActivate: [AuthGuard]},
    { path: "agriculturaloperations", component: AgriculturaloperationListComponent, canActivate: [AuthGuard]},
    { path: "agriculturaloperations/:id", component: AgriculturaloperationCreateComponent, canActivate: [AuthGuard]},
    { path: "harvestrecords", component: HarvestrecordListComponent, canActivate: [AuthGuard]},
    { path: "harvestrecords/:id", component: HarvestrecordCreateComponent, canActivate: [AuthGuard]},
    { path: "users", component: UserListComponent, canActivate: [AuthGuard]},
    { path: "users/:id", component: UserCreateComponent, canActivate: [AuthGuard]},
    { path: "login", component: LoginComponent},
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }