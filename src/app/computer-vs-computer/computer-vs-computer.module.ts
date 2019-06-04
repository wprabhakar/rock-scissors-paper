import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComputerVsComputerPage } from './computer-vs-computer.page';

const routes: Routes = [
  {
    path: '',
    component: ComputerVsComputerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComputerVsComputerPage]
})
export class ComputerVsComputerPageModule {}
