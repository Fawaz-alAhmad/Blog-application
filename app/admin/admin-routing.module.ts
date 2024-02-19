import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'dashboard', component: DashboardComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
