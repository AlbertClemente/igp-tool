import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersConfigsComponent } from './providers-configs.component';

describe('ProvidersConfigsComponent', () => {
  let component: ProvidersConfigsComponent;
  let fixture: ComponentFixture<ProvidersConfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersConfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
