import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlayerVsComputerPage } from './player-vs-computer.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerVsComputerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlayerVsComputerPage]
})

export class PlayerVsComputerPageModule {}
