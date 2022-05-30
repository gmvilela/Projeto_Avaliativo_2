import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaocriarFormComponent } from './colecaocriar-form.component';

describe('ColecaocriarFormComponent', () => {
  let component: ColecaocriarFormComponent;
  let fixture: ComponentFixture<ColecaocriarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaocriarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecaocriarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
