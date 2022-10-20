import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{
  valor : number = 0;
  destino : number = 0;

  @Output() onTransferir = new EventEmitter<any>();

 transferir(){
  const valorTransferencia ={valor: this.valor, destino: this.destino}
  this.onTransferir.emit(valorTransferencia);
  this.clearCampos();
 }

 clearCampos(){
  this.valor = 0;
  this.destino = 0;
 }

}
