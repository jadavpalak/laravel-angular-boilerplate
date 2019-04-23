import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeactiveComponent } from './user-deactive.component';

describe('UserDeactiveComponent', () => {
  let component: UserDeactiveComponent;
  let fixture: ComponentFixture<UserDeactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
