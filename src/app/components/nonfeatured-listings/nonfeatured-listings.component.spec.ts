import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonfeaturedListingsComponent } from './nonfeatured-listings.component';

describe('NonfeaturedListingsComponent', () => {
  let component: NonfeaturedListingsComponent;
  let fixture: ComponentFixture<NonfeaturedListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonfeaturedListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonfeaturedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
