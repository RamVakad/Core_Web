import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/dbAccess/user.service';

@Component({
  selector: 'update-userdata',
  templateUrl: './update-userdata.component.html',
  styleUrls: ['./update-userdata.component.css']
})
export class UpdateUserdataComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

}
