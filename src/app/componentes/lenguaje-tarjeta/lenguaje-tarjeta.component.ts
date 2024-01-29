import { Component, Input } from '@angular/core';
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
  @Input() id: number = 0;
  @Input() lenguaje: Lenguaje | null = null;
  @Input() rutaImagen: string = '';

  constructor(private router: Router) {}

  verMas() {
    this.router.navigate(['/lenguaje', this.id]);
  }
}
