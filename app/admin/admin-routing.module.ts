import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CategoriesComponent } from "./components/categories/categories.component";

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'categories', component: CategoriesComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
