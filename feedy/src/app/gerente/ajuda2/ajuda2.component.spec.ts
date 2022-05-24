import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajuda2Component } from './ajuda2.component';

describe('Ajuda2Component', () => {
  let component: Ajuda2Component;
  let fixture: ComponentFixture<Ajuda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ajuda2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ajuda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
