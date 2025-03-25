import { Component } from '@angular/core';
import { ImagemComponent } from "../components/imagem/imagem.component"
import { FrasesComponent } from "../frases/frases.component";
import { BotaoComponent } from "../botao/botao.component";

@Component({
  selector: 'app-biscoito',
  imports: [ImagemComponent, FrasesComponent, BotaoComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.scss'
})
export class BiscoitoComponent {
  imagemBiscoito: string = 'biscoito.png';
  imagemBiscoitoAberto: string = 'biscoito-aberto.png';
  imagemAtual: string = this.imagemBiscoito;
  mostrarFrase: boolean = false;
  fraseAtual: string = '';
  botoesHabilitados: boolean = true;

  frases: string[] = ["A persistência é o caminho do êxito.",
    'O sucesso é a soma de pequenos esforços repetidos diariamente.', 'Acredite em si mesmo e todo o resto se encaixará.',
    'O fracasso é apenas a oportunidade para recomeçar com mais inteligência.',
    'A coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
    'Grandes coisas nunca vieram de zonas de conforto.',
    'A única maneira de fazer um ótimo trabalho é amar o que você faz.',
    'Seja a mudança que você deseja ver no mundo.',
    'A felicidade não é algo pronto. Ela vem de suas próprias ações.',
    'Com determinação e fé, você pode mover montanhas.']

  quebrarBiscoito() {
    this.imagemAtual = this.imagemBiscoitoAberto;
    const indiceAleatorio = Math.floor(Math.random() * this.frases.length);
    this.fraseAtual = this.frases[indiceAleatorio];
    this.mostrarFrase = true;
    this.botoesHabilitados = false;
  }

  reiniciarBiscoito() {
    this.imagemAtual = this.imagemBiscoito;
    this.mostrarFrase = false;
    this.fraseAtual = '';
    this.botoesHabilitados = true;
  }
}
