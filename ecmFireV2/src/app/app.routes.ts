import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { OtherComponent } from './other/other.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'buy', component: BuyComponent},
    { path: 'sell', component: SellComponent},
    { path: 'other', component: OtherComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
