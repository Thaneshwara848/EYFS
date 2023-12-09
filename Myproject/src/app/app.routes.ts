import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';

export const routes: Routes = [
    {
        path:'home',component:HomeComponent
    },
    {
        path:'galary',component:GalaryComponent
    }
    
];
