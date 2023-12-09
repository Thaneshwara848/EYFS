import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { GalaryComponent } from './galary/galary.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent,GalaryComponent]
})
export class AppComponent {
  title = 'Myproject';
routeParams: any;
home: any;
}
