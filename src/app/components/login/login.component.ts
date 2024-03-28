import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginResponse, User } from '../../models/auth.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  

  constructor(private _formBuilder:FormBuilder,
              private _authService:AuthService,
              private _router:Router,
              private _toastr:ToastrService,
              private _userService:UserService){}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({

      name: this._formBuilder.control('',Validators.required),
      password: this._formBuilder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]))

    })
  }

  
    proceedToLogin(): void {
      if (this.loginForm.valid) {
        this._authService.login(this.loginForm.value).subscribe(
          (response: LoginResponse) => { 
            const user: User = response.user;
            this._userService.setCurrentUser(user); // Set user data in the shared service
            this._router.navigate(['/home']);
          },
          (error) => {
            
            console.error('Login failed:', error);
            this._toastr.error('Failed to Login,Try again')
          }
        );
      }
    }
  }


  
  
  


