import { UserService } from './../shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component , OnInit} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Router } from '@angular/router';


@Component({

  selector: 'app-name-editor',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})


export class LoginComponent implements OnInit {

  
  ngOnInit(): void {}
  
  isLoginError : boolean = false;
  constructor(private fb: FormBuilder,private userService : UserService,private router : Router) { }

  loginForm : FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  

  onSubmit(username,password) {
    this.userService.userAuthentication(username,password).subscribe((data : any)=>{
      //storing json object to localStorage
      localStorage.setItem('capstoneAuth',data);

      if(data.success == true){

        this.router.navigate(['/home']);
        console.log ( username + "  logged-in"); 
      }
      else{ 
         alert(data.error);
         this.router.navigate(['/login']);
    };
      return;
      
    });
    
  }

  


}