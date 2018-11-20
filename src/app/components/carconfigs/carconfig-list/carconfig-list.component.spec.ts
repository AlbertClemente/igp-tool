import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarconfigListComponent } from './carconfig-list.component';

describe('CarconfigListComponent', () => {
  let component: CarconfigListComponent;
  let fixture: ComponentFixture<CarconfigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarconfigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarconfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
