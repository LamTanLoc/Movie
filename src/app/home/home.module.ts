import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';

@NgModule({
  declarations: [HomeComponent, DanhSachPhimComponent, TrangChuComponent, TinTucComponent, ItemPhimComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
