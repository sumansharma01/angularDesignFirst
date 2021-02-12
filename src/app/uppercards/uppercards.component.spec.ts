import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercardsComponent } from './uppercards.component';

describe('UppercardsComponent', () => {
  let component: UppercardsComponent;
  let fixture: ComponentFixture<UppercardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppercardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
