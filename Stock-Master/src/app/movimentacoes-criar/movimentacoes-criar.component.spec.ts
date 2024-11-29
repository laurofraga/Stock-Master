import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesCriarComponent } from './movimentacoes-criar.component';

describe('MovimentacoesCriarComponent', () => {
  let component: MovimentacoesCriarComponent;
  let fixture: ComponentFixture<MovimentacoesCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovimentacoesCriarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentacoesCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
