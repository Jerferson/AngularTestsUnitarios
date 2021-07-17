import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input() passo: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() alterado = new EventEmitter<number>();


  valor: number = 0;
  foco: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  incrementar() {
    if (this.valor < this.max) {
      this.valor = this.valor + this.passo;
      this.alterado.emit(this.valor);
    }
  }

  decrementar() {
    if (this.valor > this.min) {
      this.valor = this.valor - this.passo;
      this.alterado.emit(this.valor);
    }
  }

  onBlur(event: FocusEvent) {
    this.foco = false;
    event.preventDefault();
    event.stopPropagation();
  }

  onKeyUp(event: KeyboardEvent) {
    if(event.code == 'ArrowUp'){
      this.incrementar();
      return;
    }
    if(event.code == 'ArrowDown'){
      this.decrementar();
      return;
    }
  }

  onFocus(event: FocusEvent) {
    this.foco = true;
    event.preventDefault();
    event.stopPropagation();
  }
}
