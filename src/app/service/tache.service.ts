import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class TacheService {

  tasks = [];

  constructor(
    public afDB: AngularFireDatabase,
  ) {
    
  }

  addTache(titre: string, date: Date, amende: number, idOwner: number) {
    this.afDB.list('Tache').push({
      id: (new Date()).getTime(),
      titre: titre,
      dateLimite: date.toJSON(),
      amende: amende,
      idOwner: idOwner
    });
  }

  echec(tache) {
    this.afDB.list('Tache/').remove(tache.key);
  }

  valider(tache) {
    this.afDB.list('Tache/').remove(tache.key);
  }

  getTache(idOwner) {
    this.afDB.list('Tache/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.tasks = [];
      actions.forEach(action => {
        if (action.payload.exportVal().idOwner === idOwner) {
          this.tasks.push({
            key: action.key,
            amende: action.payload.exportVal().amende,
            titre: action.payload.exportVal().titre,
            dateLimite: action.payload.exportVal().dateLimite
          });
        }
      });
    });
  }
}