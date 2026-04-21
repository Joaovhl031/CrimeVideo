import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaBar } from './pesquisa-bar';

describe('PesquisaBar', () => {
  let component: PesquisaBar;
  let fixture: ComponentFixture<PesquisaBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
