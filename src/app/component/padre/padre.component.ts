import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  sonValue: string = '';
  showSon: boolean = false;

  public btnMostrarClick() {
    this.showSon = true;
  }

  public eventoRecibir(valorRecibido: string) {
    this.showSon = false;
    alert(`Valor recibido ${valorRecibido}`);
  }
}
