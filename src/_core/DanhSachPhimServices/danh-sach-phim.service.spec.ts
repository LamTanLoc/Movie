import { TestBed } from '@angular/core/testing';

import { DanhSachPhimService } from './danh-sach-phim.service';

describe('DanhSachPhimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DanhSachPhimService = TestBed.get(DanhSachPhimService);
    expect(service).toBeTruthy();
  });
});
