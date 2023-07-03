import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenziaComponent } from './agenzia.component';

describe('AgenziaComponent', () => {
  let component: AgenziaComponent;
  let fixture: ComponentFixture<AgenziaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgenziaComponent]
    });
    fixture = TestBed.createComponent(AgenziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
