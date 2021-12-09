import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users:User[]=[];
  constructor(@Inject(UserService) private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(r=>{
      if (r.users !=null) this.users=r.users
  });
  }

   ngOnDestroy(): void {
    this.users=[];

}
}
