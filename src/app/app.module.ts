import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { BannerComponent } from './home/banner/banner.component';
import { OneComponent } from './home/one/one.component';
import { TwoComponent } from './home/two/two.component';
import { ThreeComponent } from './home/three/three.component';
import { FooterComponent } from './home/footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './home/articulos/articulos.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    BannerComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FooterComponent,
    HomeComponent,
    ArticulosComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
