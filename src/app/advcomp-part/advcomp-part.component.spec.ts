import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvcompPartComponent } from './advcomp-part.component';

describe('AdvcompPartComponent', () => {
  let component: AdvcompPartComponent;
  let fixture: ComponentFixture<AdvcompPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvcompPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvcompPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
