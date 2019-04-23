import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleReactiveComponent } from './role-reactive.component';

describe('RoleReactiveComponent', () => {
  let component: RoleReactiveComponent;
  let fixture: ComponentFixture<RoleReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
