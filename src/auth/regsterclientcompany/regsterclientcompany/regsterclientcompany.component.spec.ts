import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsterclientcompanyComponent } from './regsterclientcompany.component';

describe('RegsterclientcompanyComponent', () => {
  let component: RegsterclientcompanyComponent;
  let fixture: ComponentFixture<RegsterclientcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsterclientcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegsterclientcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
