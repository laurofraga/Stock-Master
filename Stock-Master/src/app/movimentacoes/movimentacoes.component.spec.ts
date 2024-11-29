import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesComponent } from './movimentacoes.component';

describe('MovimentacoesComponent', () => {
  let component: MovimentacoesComponent;
  let fixture: ComponentFixture<MovimentacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovimentacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
