import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPageLayoutComponent } from './ng-page-layout.component';

describe('NgPageLayoutComponent', () => {
  let component: NgPageLayoutComponent;
  let fixture: ComponentFixture<NgPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
