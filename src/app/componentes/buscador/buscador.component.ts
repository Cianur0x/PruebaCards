import { Component } from '@angular/core';
import { Lenguaje } from '../../services/lenguajes.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
  lenjuajes: Lenguaje[] = [];
  constructor() {}
}
