import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacchettiListComponent } from './pacchetti-list.component';

describe('PacchettiListComponent', () => {
  let component: PacchettiListComponent;
  let fixture: ComponentFixture<PacchettiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacchettiListComponent]
    });
    fixture = TestBed.createComponent(PacchettiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
