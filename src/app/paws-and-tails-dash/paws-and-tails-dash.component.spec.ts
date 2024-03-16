import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawsAndTailsDashComponent } from './paws-and-tails-dash.component';

describe('PawsAndTailsDashComponent', () => {
  let component: PawsAndTailsDashComponent;
  let fixture: ComponentFixture<PawsAndTailsDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PawsAndTailsDashComponent]
    });
    fixture = TestBed.createComponent(PawsAndTailsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
