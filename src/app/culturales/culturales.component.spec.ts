import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalesComponent } from './culturales.component';

describe('CulturalesComponent', () => {
  let component: CulturalesComponent;
  let fixture: ComponentFixture<CulturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
