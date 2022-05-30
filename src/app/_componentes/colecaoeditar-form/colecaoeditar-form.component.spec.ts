import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoeditarFormComponent } from './colecaoeditar-form.component';

describe('ColecaoeditarFormComponent', () => {
  let component: ColecaoeditarFormComponent;
  let fixture: ComponentFixture<ColecaoeditarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoeditarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecaoeditarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
