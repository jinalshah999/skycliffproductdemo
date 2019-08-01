import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './user';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
arr:User[]=[];
  constructor(private _data:UserdataService) { }

  ngOnInit() {
    this._data.getAllUsers().subscribe(
      (data:User[])=>{
        this.arr=data;
      }
    );
  }
  onUserDelete(item:User){
    this._data.deleteUser(item.user_email).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted');
      }
    );
  }
}
