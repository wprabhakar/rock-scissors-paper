import { Component, OnInit } from '@angular/core';
import { NONE, SCISSORS, ROCK, PAPER } from '../api/game.options';
import { GameService } from '../api/game.service';
import { ComputerVsComputerPage } from '../computer-vs-computer/computer-vs-computer.page';

@Component({
  selector: 'app-player-vs-computer',
  templateUrl: './player-vs-computer.page.html'
})

export class PlayerVsComputerPage implements OnInit {

  bNewGame = true;
  intervalId:any ;

  playerOneSelection = NONE;  // Player
  playerTwoSelection = NONE;  // Computer

  sPlayerOne = "Player" ;
  sPlayerTwo = "Computer" ;


  result = NONE;
  sResult: any[] = ['TIE!', 'YOU WON!', 'YOU LOSE!'];

  iRemainingTime:number = 5;
  oService: GameService;

  constructor() { }

  ngOnInit() {
    this.oService = new GameService();
  }


  ionViewDidEnter() {
    this.playGame();
  }
  
  playGame() {
    this.playerOneSelection = NONE;
    this.playerTwoSelection = NONE;
    this.bNewGame = true;
    this.iRemainingTime = this.getWaitTime() ;
    this.intervalId = setInterval(() => { 
      if ( --this.iRemainingTime == 0 ) // Timeout
        this.selectedPosition(this.getFirstSelection()) ;
    }, 1000);
  }

  selectedPosition(sel) {
    if (!this.bNewGame) return;
    clearInterval(this.intervalId);
    this.playerOneSelection = sel;
    this.playerTwoSelection = this.oService.getComputerPick() ;
    this.decideWinner() ;
  }

  decideWinner() {
    this.bNewGame = false;
    this.result = this.oService.getResult(this.playerOneSelection, this.playerTwoSelection);
    if ( this.result < 0 )
      this.result = 2 ;
  }

  shouldDisable(sel) {
    if (this.playerOneSelection == NONE)
      return ( !this.bNewGame )
    return !(this.playerOneSelection == sel);
  }

  getWaitTime()
  {
    return 5 ;
  }

  getFirstSelection()
  {
    return this.playerOneSelection ;
  }
}
