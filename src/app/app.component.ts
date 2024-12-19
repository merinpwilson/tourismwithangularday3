import { Component } from '@angular/core';
import { NavbarComponent } from './ui/navbar/navbar.component';  // Import NavbarComponent
import { CardComponent } from './ui/card/card.component';      // Import CardComponent
import { RouterOutlet } from '@angular/router';
import { StatesComponent } from "./pages/states/states.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";  // Import RouterOutlet for routing

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // The HTML template for this component
  styleUrls: ['./app.component.scss']   // The styles for this component
  ,
  imports: [RouterOutlet,StatesComponent, NavbarComponent, HomeComponent, ContactComponent]
})
export class AppComponent {
  title = 'tourism';  // The title of your app (can be used in the template)
}
