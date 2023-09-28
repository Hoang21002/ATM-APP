import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isLoggedIn: boolean = false;
    public idUser: string = '';
    public userName: string = '';
    public userPassword: string = '';
    public soTien: number = 0;
    constructor(private storageService: StorageService){}
    addAccount(accountNo: string, password:string):any{
        this.storageService.set('accountNo', accountNo);
        this.storageService.set('password',password)
    }
    async getAccount(): Promise<any>{
       const a = await this.storageService.get('accountNo')
       return a
    }
    async getPassword(): Promise<any>{
        const pass = await this.storageService.get('password')
        return pass
    }

    readFromStorage(): Promise<any>{
        return this.storageService.get('accountNo')
    }

    getData():any {
        // return this.storage.get('checklists')
    }
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