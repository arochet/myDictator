import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { TacheService } from '../service/tache.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  page = 0;

  constructor(private tacheService: TacheService, private auth: AuthService, public modalController: ModalController) { }

  ngOnInit() {
    this.googlesigneup();
  }

  async googlesigneup() {
    this.auth.googlesigneup().then(() => {
      this.page = 1;
    });
  }
  
  async ok() {
    await this.auth.saveInfo();
    await this.tacheService.getTache(this.auth.getUserId());
    this.modalController.dismiss({
      'success': true,
    });
  }

  annuler() {
    this.modalController.dismiss({
      'success': false,
    });
  }


}
