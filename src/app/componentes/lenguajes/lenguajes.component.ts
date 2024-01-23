import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';

@Component({
  selector: 'app-lenguajes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css',
})
export class LenguajesComponent {
  // se aceptan tipos compuestos, con null se acepta null lenguajes: Lenguaje[] | null = null;
  lenguajes: Lenguaje[] buscador works!

  = [];

  constructor(private _LenguajesService: LenguajesService) {
    this.lenguajes = _LenguajesService.getLenguajes();
  }

  rutaImagen(imagen: string): string {
    return this._LenguajesService.rutaImagen(imagen);
  }
}
