import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDeactiveComponent } from './role-deactive.component';

describe('RoleDeactiveComponent', () => {
  let component: RoleDeactiveComponent;
  let fixture: ComponentFixture<RoleDeactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDeactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
