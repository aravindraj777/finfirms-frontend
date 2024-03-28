import { Component, OnInit } from '@angular/core';
import { User } from '../../models/auth.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  currentUser!: User | null;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });

    console.log(this.currentUser);
    
  }


  

}
