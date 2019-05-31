import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

  @Input() ghe;
  @Output() eventGhe = new EventEmitter();



  public trangThaiGhe = false;

 
  constructor() { }

  ngOnInit() {
  }

  ChonGhe(){
    this.trangThaiGhe = !this.trangThaiGhe;
    let obj = {
      DaDat : this.trangThaiGhe,
      ghe : this.ghe
    }
    this.eventGhe.emit(obj);
   

  }

}
