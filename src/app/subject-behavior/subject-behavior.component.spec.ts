import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviorComponent } from './subject-behavior.component';

describe('SubjectBehaviorComponent', () => {
  let component: SubjectBehaviorComponent;
  let fixture: ComponentFixture<SubjectBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectBehaviorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
