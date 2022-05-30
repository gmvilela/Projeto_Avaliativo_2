import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelocriarFormComponent } from './modelocriar-form.component';

describe('ModelocriarFormComponent', () => {
  let component: ModelocriarFormComponent;
  let fixture: ComponentFixture<ModelocriarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelocriarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelocriarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
