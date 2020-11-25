import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nouvelle-tache',
  templateUrl: './nouvelle-tache.page.html',
  styleUrls: ['./nouvelle-tache.page.scss'],
})
export class NouvelleTachePage implements OnInit {

  titre: string;
  amende: number;
  date;
  @ViewChild('inputToFocus', { static: false }) myInput;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.myInput.setFocus();
      console.log("OnFocus !");
    }, 200);
  }


  valider() {
    if (this.titre.length > 1 && this.amende != null) {
      this.modalController.dismiss({
        'dismissed': true,
        'titre': this.titre,
        'amende': this.amende,
        'date': this.getDate()
      });
    }
  }

  getDate() {
    if(this.date == 1) return new Date();
    else if(this.date == 2) return new Date( (new Date()).getTime() + (1000 * 60 * 60 * 24) );
    else return new Date();
  }

  annuler() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }
}
