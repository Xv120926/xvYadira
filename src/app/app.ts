import { Swiper } from 'swiper';
import { Pagination } from 'swiper/modules';
import { PortadaComponent } from "./portada/portada.component";
import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // CORREGIDO: styleUrls con corchetes y en plural
  standalone: true,
})
export class App implements OnInit, OnDestroy, AfterViewInit {

  // Variables para el contador
  dias: string = '00';
  horas: string = '00';
  minutos: string = '00';
  segundos: string = '00';
  private intervalId: any;

  // Fecha del evento (Cámbiala aquí si quieres)
  private targetDate = new Date("2026-09-12T16:00:00").getTime();

  // CAMBIO IMPORTANTE: Usamos ChangeDetectorRef en lugar de NgZone para forzar la actualización visual
  constructor(private elRef: ElementRef, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.setupScrollAnimation();
  }

  ngOnInit(): void {
    this.actualizarReloj();

    // El intervalo se ejecuta por fuera de Angular pero forzamos la actualización de la vista con cdr.detectChanges()
    this.intervalId = setInterval(() => {
        this.actualizarReloj();
        this.cdr.detectChanges(); // ¡Esta línea es la magia que hace que baje segundo a segundo!
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  actualizarReloj() {
    const ahora = new Date().getTime();
    const tiempoRestante = this.targetDate - ahora;

    if (tiempoRestante > 0) {
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

      this.dias = dias < 10 ? '0' + dias : dias.toString();
      this.horas = horas < 10 ? '0' + horas : horas.toString();
      this.minutos = minutos < 10 ? '0' + minutos : minutos.toString();
      this.segundos = segundos < 10 ? '0' + segundos : segundos.toString();
    } else {
      this.dias = '00';
      this.horas = '00';
      this.minutos = '00';
      this.segundos = '00';
    }
  }

  setupScrollAnimation(): void {
    const sections = this.elRef.nativeElement.querySelectorAll('.section-block');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach((section: any) => {
      observer.observe(section);
    });
  }

  openInvitation() {
    const cover = this.elRef.nativeElement.querySelector('.cover-block');
    const content = this.elRef.nativeElement.querySelector('.scroll-container');

    if (cover) {
      cover.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
      cover.style.transform = 'translateY(-100vh)';
      cover.style.opacity = '0';

      setTimeout(() => {
        cover.style.display = 'none';
      }, 800);
    }
  }
}
