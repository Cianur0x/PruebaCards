import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { LenguajeTarjetaComponent } from '../lenguaje-tarjeta/lenguaje-tarjeta.component';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [NgFor, NgIf, LenguajeTarjetaComponent],
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
  lenguajesConID: any[] = [];

  constructor(
    private _lenguajeService: LenguajesService,
    private _activatedRoutes: ActivatedRoute,
    private _router: Router
  ) {
    _activatedRoutes.params.subscribe((p) => {
      this.lenguajesConID = _lenguajeService.buscarLenguajes(p['termino']);
    });
  }

  rutaImagen(nombre: string): string {
    return this._lenguajeService.rutaImagen(nombre);
  }

  verTarjeta(i: number) {
    this._router.navigate(['lenguaje', i]);
  }
}
