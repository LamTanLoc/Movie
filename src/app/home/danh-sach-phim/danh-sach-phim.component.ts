import { Component, OnInit } from '@angular/core';
import {DanhSachPhimService} from './../../../_core/DanhSachPhimServices/danh-sach-phim.service';


@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim = [];

  constructor(private danhSachPhimService : DanhSachPhimService) { }


  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim(){
  this.danhSachPhimService.layDanhSachPhim().subscribe((data:any) =>{
    this.danhSachPhim = data;
    console.log(this.danhSachPhim);
  })
  }

}
