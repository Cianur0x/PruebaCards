import { Component, Input } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';

@Component({
  selector: 'app-lenguaje-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './lenguaje-tarjeta.component.html',
  styleUrl: './lenguaje-tarjeta.component.css',
})
export class LenguajeTarjetaComponent {
  // va a terner un objeto lenguaje o null
  @Input() lenguaje: Lenguaje | null = null;
  @Input() rutaImagen: string = '';

  // constructor(private _LenguajesService: LenguajesService) {
  //   this.lenguajes = _LenguajesService.getLenguajes();
  // }

  // rutaImagen(imagen: string): string {
  //   return this._LenguajesService.rutaImagen(imagen);
  // }
}
