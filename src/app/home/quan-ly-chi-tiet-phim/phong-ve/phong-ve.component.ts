import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DanhSachPhimService } from 'src/_core/DanhSachPhimServices/danh-sach-phim.service';
import { ItemPhimComponent } from './../item-phim/item-phim.component';


@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {
  public malichchieu;
  public chiTietPhongVe: any;
  public danhSachGhe: any = [];
  public gheDaDat: any;
  public danhSachGheDaDat: any = [];

  @ViewChildren(ItemPhimComponent) listGhe: QueryList<ItemPhimComponent>;

  constructor(private activatedRoute: ActivatedRoute, private danhSachPhimService: DanhSachPhimService) { }

  ngOnInit() {
    this.getMaLichChieuURL();
    this.layChiTietPhongVe();
  }


  getMaLichChieuURL() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.malichchieu = data;
      console.log(this.malichchieu);

    })
  }

  layChiTietPhongVe() {

    this.danhSachPhimService.layChiTietPhongVe(this.malichchieu.malichchieu).subscribe((data: any) => {
      this.danhSachGhe = data.DanhSachGhe;

      console.log(this.danhSachGhe);
    })
  }

  DatGhe(obj) {
    if (obj.DaDat === true) {
      this.danhSachGheDaDat.push(obj.ghe);
    } else {
      let viTri;
      this.danhSachGheDaDat.map((item, index) => {
        if (item.MaGhe === obj.ghe.MaGhe) {
          viTri = index;
        }
      })
      this.danhSachGheDaDat.splice(viTri, 1);
    }


  }

  HuyGhe(ghe, STT) {
    this.danhSachGheDaDat.splice(STT, 1);

    this.listGhe.map((item) => {
      if (item.ghe.MaGhe === ghe.MaGhe) {
        item.trangThaiGhe = false;
      }
    })

  }


}
