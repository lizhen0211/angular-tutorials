import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RouteDemoDetailComponent} from './route-demo-detail.component';

describe('RouteDemoDetailComponent', () => {
  let component: RouteDemoDetailComponent;
  let fixture: ComponentFixture<RouteDemoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteDemoDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
