import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  idUser: string = 'Đoàn Đình Hoàng'
  userName: string = '2011384@dlu.edu.vn'
  userPassword: string = 'hoang123'
  soTien: number = 1000000
  // statusLogin: boolean = true
  constructor(private router: Router, private autherSevice: AuthService) { }
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
