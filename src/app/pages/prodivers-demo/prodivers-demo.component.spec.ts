import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdiversDemoComponent } from './prodivers-demo.component';

describe('ProdiversDemoComponent', () => {
  let component: ProdiversDemoComponent;
  let fixture: ComponentFixture<ProdiversDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdiversDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdiversDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
