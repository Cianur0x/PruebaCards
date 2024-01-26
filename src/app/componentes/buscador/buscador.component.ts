import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
  /**
   * /buscador?termino=JAVA
   * Servicio ---> Lenguaje[]
   * parametro <--- variable
   * en Servicio haremos un método para filtrar por nombre
   */
  lenguajes: Lenguaje[] = [];

  constructor(
    private _lenguajeService: LenguajesService,
    private _activatedRoute: ActivatedRoute
  ) {
    _activatedRoute.params.subscribe((p) => {
      this.lenguajes = _lenguajeService.buscarLenguajes(p['termino']);
    });
  }

  rutaImagen(nombre: string) {
    return this._lenguajeService.rutaImagen(nombre);
  }
}
