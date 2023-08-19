import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourComponent1Component } from './behaviour-component1.component';

describe('BehaviourComponent1Component', () => {
  let component: BehaviourComponent1Component;
  let fixture: ComponentFixture<BehaviourComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviourComponent1Component]
    });
    fixture = TestBed.createComponent(BehaviourComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
