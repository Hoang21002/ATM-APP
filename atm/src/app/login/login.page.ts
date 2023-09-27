import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  account: string = ''
  idUser: string = 'Đoàn Đình Hoàng'
  userName: string = '2011384@dlu.edu.vn'
  userPassword: string = 'hoang123'
  soTien: number = 1000000
  // statusLogin: boolean = true
  constructor(public formBuilder: FormBuilder, private router: Router, private autherSevice: AuthService) {
    this.myForm = formBuilder.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  addAccount(account: string, password: string) {
    let result = this.autherSevice.addAccount(account, password);
  }
  async getAccount(): Promise<any[]> {
    const a = await this.autherSevice.getAccount(this.userName)
    return a
  }
  clearInput(){
    this.myForm.patchValue({
      account : '',
      password : ''
    })
  }
  deletAll() {
    localStorage.clear()
  }
  async saveForm() {
    const arrays = await this.getAccount()
    // localStorage.clear()
    const account = this.myForm.value.account
    const password = this.myForm.value.password
    const checkAccout = this.checkAccout(arrays,account)
    if (account == '' || password == '') {
      alert('Điền tài khoảng hoặc mật khẩu')
      
    } else {
      if(checkAccout == true){
        alert('Tài khoảng tồn tại')

      }else{
        this.addAccount(account,password)
      }
    }
    this.clearInput()
  }
  checkAccout(array: any[], account: string): boolean {
    for (let index = 0; index < array.length; index++) {
      if (account == array[index]) {
        return true
      }
    }
    return false
  }
  public statusLogin: boolean = true
  ngOnInit() {
  }
  canActivate() {

  }
  Login() {
    if (this.userName == '2011384@dlu.edu.vn' && this.userPassword == 'hoang123') {
      this.autherSevice.login()
      this.router.navigate(['/home']);
      this.autherSevice.idUser = this.idUser
      this.autherSevice.userName = this.userName
      this.autherSevice.userPassword = this.userPassword
      this.autherSevice.soTien = this.soTien
    } else {
      this.statusLogin = false
    }
  }
  isLoginIn() {
    return this.statusLogin
  }

}
