import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-lenguaje-tarjeta',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './lenguaje-tarjeta.component.html',
  styleUrl: './lenguaje-tarjeta.component.css',
})
export class LenguajeTarjetaComponent {
  // va a terner un objeto lenguaje o null
  @Input() lenguaje: Lenguaje | null = null;
  @Input() rutaImagen: string = '';
  @Input() id: number = 0;
  @Output() botonPulsado: EventEmitter<number>;

  constructor(private router: Router) {
    this.botonPulsado = new EventEmitter();
  }

  // verTarjeta(i: number) {
  //   this.router.navigate(['/lenguaje', i]);
  // }

  verMas() {
    //  this.router.navigate(['/lenguaje', this.id]);
    this.botonPulsado.emit(this.id);
  }
}
