import { Component, OnInit } from '@angular/core';
import { Auth } from "../../@core/models/Auth";
import { ApiService } from '../../@core/services/api.service';
import { Router } from '@angular/router';
import { getString, setString } from '@nativescript/core/application-settings';
// import { SnackBar } from 'nativescript-material-snackbar';

@Component({
    selector: 'ns-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    moduleId: module.id,
})
export class AuthComponent implements OnInit {

    public registerMode: boolean;
    public auth: Auth;

    constructor(
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.registerMode = false;
        const myToken = getString("mr-token");
        if(myToken){
            this.router.navigate(['/items'])
        } else {
            this.auth = {username: "", password: ""};
        }
    }
    submitForm(){
        if(this.registerMode) {
            this.apiService.registerUser(this.auth).subscribe(
                (results: any) => {
                    this.loginFunction();
                },
                err => {
                    console.log(err)
                    // const snackbar = new SnackBar();
                    // snackbar.simple(`Can't register`);
                }
            )
        } else {
            this.loginFunction();
        }

    }
    loginFunction(){
        this.apiService.loginUser(this.auth).subscribe(
            (results: any) => {
                setString("mr-token", results.token);
                this.router.navigate(['/items'])
            },
            err => {
                console.log(err)
                // const snackbar = new SnackBar();
                // snackbar.simple(err.error.non_field_errors[0]);
            }
        )
    }
}
