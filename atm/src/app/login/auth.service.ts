import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isLoggedIn: boolean = false;
    public idUser: string = '';
    public userName: string = '';
    public userPassword: string = '';
    public soTien: number = 0;
    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    isLoggedInUser() {
        return this.isLoggedIn;
    }
}