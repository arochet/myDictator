import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ConnexionPage } from '../connexion/connexion.page';
import { Tache } from '../models/Tache';
import { NouvelleTachePage } from '../nouvelle-tache/nouvelle-tache.page';
import { AuthService } from '../service/auth.service';
import { TacheService } from '../service/tache.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listTache = [];
  tachesSubscription: Subscription;
  urlAuth: string = "../assets/icon/favicon.png";

  constructor(
    private tacheService: TacheService,
    private auth: AuthService,
    public modalController: ModalController,
    private platform: Platform) { }

  async ngOnInit() {
    await this.auth.loadInfo();
    await this.tacheService.getTache(await this.auth.getUserId());
    this.urlAuth = this.auth.getImageUrl();
  }

  formatDate(date) {
    date = new Date(date);

    var day = ('0' + date.getDate()).slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();

    return year + '-' + month + '-' + day;
  }

  async addTache() {
    const idOwner = await this.auth.getUserId();
    if (idOwner != null) {
      const modal = await this.modalController.create({
        component: NouvelleTachePage,
        componentProps: {}
      });
      await modal.present()
      const { data } = await modal.onWillDismiss();
      if (data.titre != null && data.amende != null) this.tacheService.addTache(data.titre, data.date, data.amende, idOwner);
    } else {
      console.log("Tu n'est pas connecté !");
    }
  }

  async connexion() {
    const modal = await this.modalController.create({
      component: ConnexionPage,
      componentProps: {}
    });
    await modal.present()
    const { data } = await modal.onWillDismiss();
  }

  echec(tache) {
    this.tacheService.echec(tache);
  }

  valider(tache) {
    this.tacheService.valider(tache);
  }

  async getId() {
    console.log("userinfo : " + await this.auth.getUserId());
    this.tacheService.getTache(await this.auth.getUserId());
  }
}

