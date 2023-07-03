import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenzieListComponent } from './agenzie-list.component';

describe('AgenzieListComponent', () => {
  let component: AgenzieListComponent;
  let fixture: ComponentFixture<AgenzieListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgenzieListComponent]
    });
    fixture = TestBed.createComponent(AgenzieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
