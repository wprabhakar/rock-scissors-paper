import { GameService } from './game.service';
import { ROCK, SCISSORS, PAPER, NONE } from './game.options' ;

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    service = new GameService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return 0 if selections are scissors & scissors', () => {
    expect(service.getResult(SCISSORS, SCISSORS)).toBe(0) ;
  }) ;
  it('return 0 if selections are paper & paper', () => {
    expect(service.getResult(PAPER, PAPER)).toBe(0) ;
  }) ;
  it('return 0 if selections are rock & rock', () => {
    expect(service.getResult(ROCK, ROCK)).toBe(0) ;
  }) ;
  it('return 1 if selections are rock & scissors', () => {
    expect(service.getResult(ROCK,SCISSORS)).toBe(1) ;
  });
  it('return 2 if selections are scissors & rock', () => {
    expect(service.getResult(SCISSORS, ROCK)).toBe(2) ;
  });

  it('return 2 if selections are rock & paper', () => {
    expect(service.getResult(ROCK,PAPER)).toBe(2) ;
  });
  it('return 1 if selections are paper & rock', () => {
    expect(service.getResult(PAPER, ROCK)).toBe(1) ;
  });
  it('return 2 if selections are paper & scissors', () => {
    expect(service.getResult(PAPER, SCISSORS)).toBe(2) ;
  });
  it('return 1 if selections are scissors & paper', () => {
    expect(service.getResult(SCISSORS,PAPER)).toBe(1) ;
  });

  it('should return -1 if 1st Player has not selected', () => {
    expect(service.getResult(NONE,PAPER)).toBe(-1) ;
  });
  it('should return -1 if 2nd Player has not selected', () => {
    expect(service.getResult(SCISSORS,NONE)).toBe(-1) ;
  });

  it('computer selection should be >=1 & <=3', () => {
    let r = service.getComputerPick();
    expect(r).toBeGreaterThanOrEqual(1) ;
    expect(r).toBeLessThanOrEqual(3) ;
  });
});
