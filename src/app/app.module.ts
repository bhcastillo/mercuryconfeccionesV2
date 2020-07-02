import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { CardComponent } from './components/template/card/card.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LazyLoadingComponent } from './components/template/lazy-loading/lazy-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    CardComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactComponent,
    ProductComponent,
    WelcomeComponent,
    SideBarComponent,
    LazyLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
