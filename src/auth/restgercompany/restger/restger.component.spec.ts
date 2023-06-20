import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestgerComponent } from './restger.component';

describe('RestgerComponent', () => {
  let component: RestgerComponent;
  let fixture: ComponentFixture<RestgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
