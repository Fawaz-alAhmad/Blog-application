import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CategoryNavbarComponent } from './components/layout/category-navbar/category-navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryNavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CategoryNavbarComponent,
  ],
})
export class SharedModule { }
