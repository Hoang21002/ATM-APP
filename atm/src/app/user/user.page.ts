import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {
  test: boolean = true
  idUser: string | undefined;
  userName: string| undefined;
  userPassword: string | undefined
  soTien: number | undefined
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.idUser=this.authService.idUser
    this.userName=this.authService.userName
    this.userPassword=this.authService.userPassword
    this.soTien=this.authService.soTien
  }

}
