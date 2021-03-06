import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '@lgm-erp-core/services/firestore.service';
import { AuthService } from '@lgm-erp-core/services/auth.service';
import { IRegisterUser } from '@lgm-erp-core/interfaces/auth.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged:boolean = false;
  uid = null! as string;
  userInfo: IRegisterUser = null!;

  constructor( private authService: AuthService,
              private firestore: FirestoreService ) {  }

  async ngOnInit() {
    this.authService.stateUser().subscribe( res => {
      if(res) {
        this.logged = true;
        this.getUid();
      } else {
        this.logged = false;
      }
    });
  }

  async getUid() {
    const uid = await this.authService.getUid();
    if(uid) {
      this.uid = uid
      this.getUserInfo();
    } else {
      console.log('No hay UID');
    }
  }

  getUserInfo() {
    const path = 'users';
    const id = this.uid;
    this.firestore.getDoc<IRegisterUser>(path, id).subscribe( res => {
      if(res) {
        console.log(res)
        this.userInfo = res;
      }
    });
  }

  
  logout() {
    this.logged = false;
    this.authService.logout();
  }

}
