import { Injectable } from '@angular/core';
import { CharitableAct } from '../charitable-act.model';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()

export class CharitableActService {
  charitableActs: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.charitableActs = angularFire.database.list('charitableActs');
  }

  getCharitableActs() {
    return this.charitableActs;
  }

  addCharitableAct(charitableAct: CharitableAct):void {
    this.charitableActs.push(charitableAct);
  }
  getCharitableActById(id: string) {
    return this.angularFire.database.object('charitableActs/' + id);
  }

  addDonation(amount, charitableActToDonateTo) {
    var charitableActInFirebase = this.getCharitableActById(charitableActToDonateTo.$key);
    charitableActInFirebase.update({currentFunding: (amount + charitableActToDonateTo.currentFunding)})
    console.log("hello");
  }

}
