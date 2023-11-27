import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationPComponent } from './animation-p.component';

describe('AnimationPComponent', () => {
  let component: AnimationPComponent;
  let fixture: ComponentFixture<AnimationPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationPComponent]
    });
    fixture = TestBed.createComponent(AnimationPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
