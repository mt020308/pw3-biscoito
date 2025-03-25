import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.scss'
})
export class FrasesComponent {
  @Input() mostrarFrase: boolean = true;
  @Input() fraseAtual: string = '';

  frases: string[] = ["A persistência é o caminho do êxito.",
    'O sucesso é a soma de pequenos esforços repetidos diariamente.', 'Acredite em si mesmo e todo o resto se encaixará.',
    'O fracasso é apenas a oportunidade para recomeçar com mais inteligência.',
    'A coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
    'Grandes coisas nunca vieram de zonas de conforto.',
    'A única maneira de fazer um ótimo trabalho é amar o que você faz.',
    'Seja a mudança que você deseja ver no mundo.',
    'A felicidade não é algo pronto. Ela vem de suas próprias ações.',
    'Com determinação e fé, você pode mover montanhas.']
  

    SortearFrase(): string {
      const indiceAleatorio = Math.floor(Math.random() * this.frases.length);
      return this.frases[indiceAleatorio];
    }

  //Dupla: Matheus Henrique e Vitor Henrique
}
