import { Component, OnInit } from '@angular/core';
import { DanhSachPhimService } from 'src/_core/DanhSachPhimServices/danh-sach-phim.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  public maPhim: any;
  public Phim: any;
  constructor(private danhSachPhimService: DanhSachPhimService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUrl();
    this.getChiTietPhim();
  }

  getChiTietPhim() {
    this.danhSachPhimService.layChiTietPhim(this.maPhim).subscribe((data: any) => {

      this.Phim = data;

      console.log(this.Phim);
    })

  }

  getUrl() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.maPhim = data.maPhim;
    })

  }

  muaVe(maLichChieu) {
    this.router.navigate(["/home/quan-ly-chi-tiet-phim/phong-ve/"],
      {
        queryParams: {
          malichchieu: maLichChieu
        }
      })


  }

}
