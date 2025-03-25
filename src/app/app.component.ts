import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagemComponent } from './components/imagem/imagem.component';
import { FrasesComponent } from "./frases/frases.component";
import { BiscoitoComponent } from "./biscoito/biscoito.component";
import { BotaoComponent } from "./botao/botao.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImagemComponent, FrasesComponent, BiscoitoComponent, BotaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pw3-biscoito';
}
