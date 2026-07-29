import { Component, signal , OnInit} from '@angular/core';
import Swiper from 'swiper';
import { Pagination} from 'swiper/modules';
import { PortadaComponent } from "./portada/portada.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [PortadaComponent],
})
export class App implements OnInit{
  ngOnInit() {
    const swiper = new Swiper('.swiper', {
      direction: 'vertical',
      loop: false,
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // permite clic en los puntitos
      },
      on: {
        slideChange: () => {
          const cortina = document.querySelector('.cortina');
          cortina?.classList.add('oculta'); // dispara efecto al cambiar
        }
      }
    });

    // Detectar clic en desktop para avanzar
    const swiperEl = document.querySelector('.swiper');
    swiperEl?.addEventListener('click', () => {
      if (!this.isMobile()) {
        swiper.slideNext(); // avanza al siguiente slide
      }
    });
  }

  // Método para detectar si es móvil
  isMobile(): boolean {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
}
