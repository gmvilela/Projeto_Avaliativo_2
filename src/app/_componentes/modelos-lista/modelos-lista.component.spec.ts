import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosListaComponent } from './modelos-lista.component';

describe('ModelosListaComponent', () => {
  let component: ModelosListaComponent;
  let fixture: ComponentFixture<ModelosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
