import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloeditarFormComponent } from './modeloeditar-form.component';

describe('ModeloeditarFormComponent', () => {
  let component: ModeloeditarFormComponent;
  let fixture: ComponentFixture<ModeloeditarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloeditarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloeditarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
