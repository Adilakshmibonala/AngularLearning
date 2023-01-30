import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTransulatorComponent } from './google-transulator.component';

describe('GoogleTransulatorComponent', () => {
  let component: GoogleTransulatorComponent;
  let fixture: ComponentFixture<GoogleTransulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleTransulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleTransulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
