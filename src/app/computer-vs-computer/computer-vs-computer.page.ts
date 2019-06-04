import { Component } from '@angular/core';
import { PlayerVsComputerPage } from '../player-vs-computer/player-vs-computer.page' ;

@Component({
  selector: 'app-computer-vs-computer',
  templateUrl: './computer-vs-computer.page.html'
})

export class ComputerVsComputerPage extends PlayerVsComputerPage {

    sPlayerOne = "Computer A" ;
    sPlayerTwo = "Computer B" ;

    sResult: any[] = ["It's a TIE!", this.sPlayerOne + ' WINS!', this.sPlayerTwo + ' WINS!'];
  
    constructor() { super(); }
      
    getWaitTime()
    {
      return 3 ;
    }

    getFirstSelection()
    {
      return this.oService.getComputerPick() ;
    }  
}
