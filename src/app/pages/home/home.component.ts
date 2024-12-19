import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CarousalComponent } from "../../ui/carousal/carousal.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarousalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
