import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RedisDemoComponent} from './redis-demo.component';

describe('RedisDemoComponent', () => {
  let component: RedisDemoComponent;
  let fixture: ComponentFixture<RedisDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedisDemoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedisDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
