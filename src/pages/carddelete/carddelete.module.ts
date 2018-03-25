import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarddeletePage } from './carddelete';

@NgModule({
  declarations: [
    CarddeletePage,
  ],
  imports: [
    IonicPageModule.forChild(CarddeletePage),
  ],
})
export class CarddeletePageModule {}
