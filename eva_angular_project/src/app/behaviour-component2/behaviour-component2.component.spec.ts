import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourComponent2Component } from './behaviour-component2.component';

describe('BehaviourComponent2Component', () => {
  let component: BehaviourComponent2Component;
  let fixture: ComponentFixture<BehaviourComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviourComponent2Component]
    });
    fixture = TestBed.createComponent(BehaviourComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
