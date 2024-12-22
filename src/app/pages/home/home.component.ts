import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CarousalComponent } from "../../ui/carousal/carousal.component";
import { CarouselModule} from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor, CarousalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 1
        }
      },
      nav: true
    }


  cimages=[
    {
    id:1,
    alt:'tata',
    src:'https://th.bing.com/th?id=OIP.WbyQVfF7inQ2_NcTtTyXHwHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },

  {
    id:2,
    alt:'amazon',
    src:'https://th.bing.com/th?id=OIP.3meF7mC6eHnDmied3AsDTwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },

  {
    id:3,
    alt:'google',
    src:'https://th.bing.com/th?id=OIP.yH-XqsWNcE_H-iTv4T3vKQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },

  {
    id:4,
    alt:'xyz',
    src:'https://th.bing.com/th?id=OIP.OFInEkY3zHqXMrjRPWzgtgHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  },

  ]
}
