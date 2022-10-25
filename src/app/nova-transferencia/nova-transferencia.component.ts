import { TransferenciaService } from './../service/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.models';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService) {

  }

  @Output() onTransferir = new EventEmitter<any>();

  transferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir)
      .subscribe(result => {
        console.table(result);
        this.clearCampos();
      },
      (error)=> console.log(error));

    this.clearCampos();
  }

  clearCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
