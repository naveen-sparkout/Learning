import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
   
   userForm!: FormGroup;
   submitted :Boolean | undefined;
   isLoading: boolean | undefined;
   componentStatusSub: any;
   componentStatus :any

  constructor(public userService:UserService,public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    
    this.submitted = false;
    this.userForm = this.formBuilder.group({
			first_name  : new FormControl(''),
      last_name  : new FormControl(''),
      user_name  : new FormControl(''),
      city  : new FormControl(''),
      state  : new FormControl(''),
      zip  : new FormControl(''),
      phone  : new FormControl(''),
			email  : new FormControl(''),
		  password: new FormControl('')
		});
  }
  get userControl() {
		return this.userForm.controls;
	}

  onCreate(): void {
		this.componentStatusSub = this.userService.getComponentStatusListener()
		.subscribe(
			componentStatus => {
			this.isLoading = false;
		});
				
			this.isLoading = true;
			this.userService.createUser(this.userForm.value)
			.then(user_res => {
				this.isLoading = false;
                console.log('inside create');
                
				this.ngOnInit();			
			})
			.catch(err => {
				this.isLoading = false;
				console.log(err);
                
			});
		
	}
 

}
