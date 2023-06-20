import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestgerUserComponent } from './restger-user.component';

describe('RestgerUserComponent', () => {
  let component: RestgerUserComponent;
  let fixture: ComponentFixture<RestgerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestgerUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestgerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
