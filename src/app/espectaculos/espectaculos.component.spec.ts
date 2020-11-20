import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculosComponent } from './espectaculos.component';

describe('EspectaculosComponent', () => {
  let component: EspectaculosComponent;
  let fixture: ComponentFixture<EspectaculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspectaculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
