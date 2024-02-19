import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { CategoryNavbarComponent } from './layout/components/category-navbar/category-navbar.component';
import { SinglePostComponent } from './pages/components/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/components/single-category/single-category.component';
import { AboutUsComponent } from './pages/components/about-us/about-us.component';
import { ContactUsComponent } from './pages/components/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/components/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: SingleCategoryComponent },
  { path: 'post', component: SinglePostComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'terms-conditions', component: TermsAndConditionsComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
