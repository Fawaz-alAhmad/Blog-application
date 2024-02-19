import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutUsComponent } from "./components/pages/about-us/about-us.component";
import { ContactUsComponent } from "./components/pages/contact-us/contact-us.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { SingleCategoryComponent } from "./components/pages/single-category/single-category.component";
import { SinglePostComponent } from "./components/pages/single-post/single-post.component";
import { TermsAndConditionsComponent } from "./components/pages/terms-and-conditions/terms-and-conditions.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: SingleCategoryComponent },
  { path: 'post', component: SinglePostComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'terms-conditions', component: TermsAndConditionsComponent },]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
