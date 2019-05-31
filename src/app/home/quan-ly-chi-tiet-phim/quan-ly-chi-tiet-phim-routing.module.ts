import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyChiTietPhimComponent } from './quan-ly-chi-tiet-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { PhongVeComponent } from './phong-ve/phong-ve.component';







const routes: Routes = [
    {
        path: "", component: QuanLyChiTietPhimComponent, children: [
            { path: "chi-tiet-phim", component: ChiTietPhimComponent },
            { path: "phong-ve", component: PhongVeComponent }


        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuanLyChiTietPhimRoutingModule { }
