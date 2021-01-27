import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import {AdicionaItemPage} from '../adiciona-item/adiciona-item';
import {DetalheItemPage} from "../detalhe-item/detalhe-item";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {
    this.dataService.getData().then((todos) => {
      if (todos) {
        this.items = todos;
      }
    });
  }

  ionViewDidLoad() {
    this.items = [
      {titulo: "todo 1", descricao: "tarefa 1"},
      {titulo: "todo 2", descricao: "tarefa 2"},
      {titulo: "todo 3", descricao: "tarefa 3"}
    ];
  }

  adicionarItem() {
    let addModal = this.modalCtrl.create(AdicionaItemPage);

    addModal.onDidDismiss((item) => {
      if (item) {
        this.items.push(item);
        this.dataService.salvarData(this.items);
      }
    });

    addModal.present();
  }

  exibirItem(item) {
    this.navCtrl.push(DetalheItemPage, {
      item: item
    });
  }

  excluirItem(item) {
    let indice = this.items.findIndex(item);
    this.items.slice(indice, 1);
    this.dataService.salvarData(this.items);
  }
}
