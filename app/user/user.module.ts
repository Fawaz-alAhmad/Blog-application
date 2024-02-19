import { NgModule } from "@angular/core";

import { CommentFormComponent } from "./components/comments/comment-form/comment-form.component";
import { CommentListComponent } from "./components/comments/comment-list/comment-list.component";
import { PostCardComponent } from "../shared/components/post-card/post-card.component";
import { SubscriptionFormComponent } from "../shared/components/subscription-form/subscription-form.component";
import { CategoryNavbarComponent } from "./components/layout/category-navbar/category-navbar.component";
import { AboutUsComponent } from "./components/pages/about-us/about-us.component";
import { ContactUsComponent } from "./components/pages/contact-us/contact-us.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { SingleCategoryComponent } from "./components/pages/single-category/single-category.component";
import { SinglePostComponent } from "./components/pages/single-post/single-post.component";
import { TermsAndConditionsComponent } from "./components/pages/terms-and-conditions/terms-and-conditions.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";


@NgModule({
  declarations: [
    CategoryNavbarComponent,
    HomeComponent,
    CommentFormComponent,
    CommentListComponent,
    SubscriptionFormComponent,
    PostCardComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    ContactUsComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule
  ],
  exports: [
    CategoryNavbarComponent,
    HomeComponent,
    CommentFormComponent,
    CommentListComponent,
    SubscriptionFormComponent,
    PostCardComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    ContactUsComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
  ],
})
export class UserModule { }
