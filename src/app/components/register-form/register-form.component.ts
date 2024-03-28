import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit{


  registerForm!:FormGroup;

  constructor(private _formBuilder:FormBuilder,
              private authService : AuthService,
              private _router :Router,
              private _toastr:ToastrService
             ){}




  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({

      firstName: this._formBuilder.control('',Validators.required),
      lastName:  this._formBuilder.control('',Validators.required),
      name:  this._formBuilder.control('',Validators.required),
      phone: this._formBuilder.control('', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
      email: this._formBuilder.control('',Validators.compose([Validators.required,Validators.email])),
      password: this._formBuilder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
      
      
    })
  }


  proceedToRegister(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          this._toastr.success('Registration successful!'); 
          this._router.navigate(['/login'])
          console.log(response);
        },
        error => {
          this._toastr.error("User Exists,Registration Failed"); 
        }
      );
    }
  }
  





}
