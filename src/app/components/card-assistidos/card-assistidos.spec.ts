import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAssistidos } from './card-assistidos';

describe('CardAssistidos', () => {
  let component: CardAssistidos;
  let fixture: ComponentFixture<CardAssistidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAssistidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAssistidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
