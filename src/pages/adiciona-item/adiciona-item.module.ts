import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionaItemPage } from './adiciona-item';

@NgModule({
  declarations: [
    AdicionaItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionaItemPage),
  ],
})
export class AdicionaItemPageModule {}
