import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';





const routes: Routes = [
    {
        path: "", component: HomeComponent, children: [
            { path: "danh-sach-phim", component: DanhSachPhimComponent },
            { path: "", component: TrangChuComponent },
            { path: "tin-tuc", component: TinTucComponent },
            { path: "quan-ly-chi-tiet-phim", loadChildren: "./quan-ly-chi-tiet-phim/quan-ly-chi-tiet-phim.module#QuanLyChiTietPhimModule" }
        ]

    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
