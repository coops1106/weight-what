import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementCalculatorComponent } from './movement-calculator.component';

describe('MovementCalculatorComponent', () => {
  let component: MovementCalculatorComponent;
  let fixture: ComponentFixture<MovementCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
