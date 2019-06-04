import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'player-vs-computer', loadChildren: './player-vs-computer/player-vs-computer.module#PlayerVsComputerPageModule' },
  { path: 'computer-vs-computer', loadChildren: './computer-vs-computer/computer-vs-computer.module#ComputerVsComputerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
