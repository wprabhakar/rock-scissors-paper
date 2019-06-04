import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerVsComputerPage } from './computer-vs-computer.page';

describe('ComputerVsComputerPage', () => {
  let component: ComputerVsComputerPage;
  let fixture: ComponentFixture<ComputerVsComputerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerVsComputerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerVsComputerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
