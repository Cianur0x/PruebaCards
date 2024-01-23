import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
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
  lenjuajes: Lenguaje[] = [];
  constructor(
    private _lenguajeService: LenguajesService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
