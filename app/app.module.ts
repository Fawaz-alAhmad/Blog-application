import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryNavbarComponent } from './layout/components/category-navbar/category-navbar.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { AboutUsComponent } from './pages/components/about-us/about-us.component';
import { ContactUsComponent } from './pages/components/contact-us/contact-us.component';
import { HomeComponent } from './pages/components/home/home.component';
import { SingleCategoryComponent } from './pages/components/single-category/single-category.component';
import { SinglePostComponent } from './pages/components/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/components/terms-and-conditions/terms-and-conditions.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { SubscriptionFormComponent } from './shared/components/subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/components/comment-form/comment-form.component';
import { CommentListComponent } from './comments/components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryNavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    PostCardComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
