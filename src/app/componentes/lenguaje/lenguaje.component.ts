import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../services/lenguajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lenguaje',
  standalone: true,
  imports: [],
  templateUrl: './lenguaje.component.html',
  styleUrl: './lenguaje.component.css',
})
export class LenguajeComponent {
  lenguaje: Lenguaje | null = null;
  routaCompleta: string = '';

  constructor(
    private _lenguajeService: LenguajesService,
    private _activatedRoute: ActivatedRoute
  ) {
    _activatedRoute.params.subscribe((p) => {
      this.lenguaje = _lenguajeService.getLenguaje(p['id']);
      this.routaCompleta = _lenguajeService.rutaImagen(this.lenguaje.imagen);
    });
  }
}
