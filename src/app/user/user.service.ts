import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { Userdata } from "./user.model";
const BACKEND_URL = environment.apiUrl + "/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private componentStatusListener = new Subject<boolean>();
  getComponentStatusListener() {
    return this.componentStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  createUser = async(obj:Userdata) => new Promise<any>((resolve, rejects) => {
    console.log(obj);
    this.http.post(BACKEND_URL + "/create", obj)
    .subscribe(
      response => {
          this.router.navigate(["/get-user"]);
          resolve(response);
          console.log("inside true");
          
      },
      error => {
        rejects(error);
        console.log(error);
        
        console.log("inside");
      }
    );
  })
}
