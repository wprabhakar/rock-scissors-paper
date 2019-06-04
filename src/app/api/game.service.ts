import { Injectable } from '@angular/core';
import { NONE, ROCK, PAPER, SCISSORS } from './game.options' ;

@Injectable({
  providedIn: 'root'
})

// This service can be hosted remotely as well
// Core Logic for the Game in evaluating the outcome of the game
// Also contains the logic to randomly pick Rock / Scissor / Paper
export class GameService {

  constructor() { }

  // calculate the Result
  // Returns 0 => For Tie
  //         1 => 1st Selection Wins
  //         2 => 2nd Selection Wins
  //        -1 => Atleast 1 selection was not done 
  getResult ( s1:number, s2:number  )
  {
    if ( s1 == NONE || s2 == NONE ) return -1 ;
    if ( s1 == s2 ) return 0 ;
    if ( s1 == ROCK )
    {
      if ( s2 == PAPER ) return 2 ;
      return 1 ; // s2 = SCISSORS
    }
    if ( s1 == PAPER )
    {
      if ( s2 == SCISSORS ) return 2 ;
      return 1 ; // s2 = ROCK
    }
    if ( s1 == SCISSORS )
    {
      if ( s2 == ROCK ) return 2 ;
      return 1 ; // s2 = PAPER
    }
    console.error("LogicError: " + s1 + " " + s2 ) ;
  }

  min = 1;
  max = 3;
  // Generate a random number from 1 to 3
  getComputerPick() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
