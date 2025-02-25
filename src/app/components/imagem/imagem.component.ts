import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.scss'
})
export class ImagemComponent {
  biscoito: string = '/biscoito.png'
  
  public trocaBiscoito() : void{
    const opened = "/biscoito-aberto.png"
    const closed = "/biscoito.png"

    this.biscoito = (this.biscoito == opened) ? closed : opened;
  }
}
