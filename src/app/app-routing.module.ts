import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalListComponent } from "./animal/animal-list/animal-list.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "animals", component: AnimalListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }