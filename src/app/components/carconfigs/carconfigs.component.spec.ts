import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarconfigsComponent } from './carconfigs.component';

describe('CarconfigsComponent', () => {
  let component: CarconfigsComponent;
  let fixture: ComponentFixture<CarconfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarconfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarconfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
