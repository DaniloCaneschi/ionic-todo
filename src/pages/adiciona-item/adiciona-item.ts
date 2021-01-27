import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-adiciona-item',
  templateUrl: 'adiciona-item.html',
})
export class AdicionaItemPage {

  titulo: string;
  descricao: string;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  ionViewDidLoad() {
  }

  salvarItem() {
    let item = {
      titulo: this.titulo,
      descricao: this.descricao
    };

    this.view.dismiss(item);
  }

  fechar() {
    this.view.dismiss();
  }
}
