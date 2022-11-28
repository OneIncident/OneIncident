import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { User } from "../model/user.model";

@Component({
    selector: 'app-auth',
    templateUrl: "auth.component.html"
})

export class AuthComponent {
    public user!: User;
    public errorMessage!: string;

    constructor(private router: Router,
        private auth: AuthService) { }

    ngOnInit(): void {
        console.log('->Debug-> at the auth component')
        this.user = new User();
    }

    authenticate(form: NgForm): void {
        if (form.valid) {
            // perform authentication
            this.auth.authenticate(this.user)
                .subscribe(data => {
                    if (data.success) {
                        this.auth.storeUserData(data.token, data.user);
                        this.router.navigateByUrl("/admin/main");
                    }
                    this.errorMessage = "Authentication Failed";
                });
        } else {
            this.errorMessage = "Form Data Invalid";
        }
    }
}