import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.scss'
})
export class ImagemComponent {
  @Input() imagemBiscoito: string = '';
}
