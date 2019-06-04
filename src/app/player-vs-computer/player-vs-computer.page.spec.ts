import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVsComputerPage } from './player-vs-computer.page';

describe('PlayerVsComputerPage', () => {
  let component: PlayerVsComputerPage;
  let fixture: ComponentFixture<PlayerVsComputerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerVsComputerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerVsComputerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
