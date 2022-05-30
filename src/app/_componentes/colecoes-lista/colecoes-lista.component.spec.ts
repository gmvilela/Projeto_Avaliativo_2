import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecoesListaComponent } from './colecoes-lista.component';

describe('ColecoesListaComponent', () => {
  let component: ColecoesListaComponent;
  let fixture: ComponentFixture<ColecoesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecoesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
