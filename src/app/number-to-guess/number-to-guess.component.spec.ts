import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToGuessComponent } from './number-to-guess.component';

describe('NumberToGuessComponent', () => {
  let component: NumberToGuessComponent;
  let fixture: ComponentFixture<NumberToGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberToGuessComponent]
    });
    fixture = TestBed.createComponent(NumberToGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
