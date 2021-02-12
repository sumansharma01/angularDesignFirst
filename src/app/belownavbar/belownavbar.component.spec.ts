import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelownavbarComponent } from './belownavbar.component';

describe('BelownavbarComponent', () => {
  let component: BelownavbarComponent;
  let fixture: ComponentFixture<BelownavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelownavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelownavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
