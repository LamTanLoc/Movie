import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyChiTietPhimComponent } from './quan-ly-chi-tiet-phim.component';
import { QuanLyChiTietPhimRoutingModule } from './quan-ly-chi-tiet-phim-routing.module';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { PhongVeComponent } from './phong-ve/phong-ve.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';


@NgModule({
  declarations: [QuanLyChiTietPhimComponent, ChiTietPhimComponent, PhongVeComponent, ItemPhimComponent],
  imports: [
    CommonModule,
    QuanLyChiTietPhimRoutingModule
  ],

})
export class QuanLyChiTietPhimModule { }
