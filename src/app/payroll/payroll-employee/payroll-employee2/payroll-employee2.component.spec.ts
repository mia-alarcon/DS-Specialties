import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmployee2Component } from './payroll-employee2.component';

describe('PayrollEmployee2Component', () => {
  let component: PayrollEmployee2Component;
  let fixture: ComponentFixture<PayrollEmployee2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollEmployee2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollEmployee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
