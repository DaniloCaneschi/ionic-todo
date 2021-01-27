import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-detalhe-item',
  templateUrl: 'detalhe-item.html',
})
export class DetalheItemPage {

  titulo: string;
  descricao: string;

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.titulo = this.navParams.get('item').titulo;
    this.descricao = this.navParams.get('item').descricao;
  }

}
