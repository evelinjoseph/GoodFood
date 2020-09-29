import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = "" 

  constructor(private nacCtrl: NavController) { }

  ngOnInit() {
  }

  public login() {
    const { email, password } = this
    this.nacCtrl.navigateRoot(['./tabs'])

  }

}
