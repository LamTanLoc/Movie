import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DanhSachPhimService {

  constructor(private http: HttpClient) { }

  layDanhSachPhim() : Observable <any>{
    
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09`;

    let observable = this.http.get(url).pipe(
      tap(
        () => {},
        catchError(err => {
          return this.handleErr(err);
        })

      )


    )

    return observable;
  }

  layChiTietPhim(MaPhim):  Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${MaPhim}`;
    let observable = this.http.get(url).pipe(
      tap(
        ()=>{},
        catchError(err => {
          return this.handleErr(err);
        })

      )
    )
    return observable;
  }

  layChiTietPhongVe(maPhongVe):  Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maPhongVe}`;
    let observable = this.http.get(url).pipe(
      tap(
        ()=>{},
        catchError(err => {
          return this.handleErr(err);
        })

      )
    )
    return observable;
  }



  handleErr(err){
    return err;
  }
  


}
