import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskDrComponent } from './ask-dr.component';

describe('AskDrComponent', () => {
  let component: AskDrComponent;
  let fixture: ComponentFixture<AskDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskDrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
