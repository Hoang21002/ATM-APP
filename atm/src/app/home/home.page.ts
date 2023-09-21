import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../login/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage implements OnInit {
  test: boolean = true
  idUser: string | undefined;
  userName: string| undefined;
  userPassword: string | undefined
  soTien: number | undefined
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.idUser=this.authService.idUser
    this.userName=this.authService.userName
    this.userPassword=this.authService.userPassword
    this.soTien=this.authService.soTien
  }
  showUser(){
    this.authService.login()
    this.router.navigate(['/user'])
  }
}
