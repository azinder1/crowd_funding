import { Injectable } from '@angular/core';
import { CharitableAct } from './charitable-act.model';
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

}
