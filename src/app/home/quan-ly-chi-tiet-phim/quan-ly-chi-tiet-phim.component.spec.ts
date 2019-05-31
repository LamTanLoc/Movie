import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyChiTietPhimComponent } from './quan-ly-chi-tiet-phim.component';

describe('QuanLyChiTietPhimComponent', () => {
  let component: QuanLyChiTietPhimComponent;
  let fixture: ComponentFixture<QuanLyChiTietPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyChiTietPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyChiTietPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
