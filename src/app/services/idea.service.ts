import { Injectable } from '@angular/core';
import { Idea } from '../idea.model';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()

export class IdeaService {
  ideas: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.ideas = angularFire.database.list('ideas');
  }

  getIdeas() {
    return this.ideas;
  }
  addIdea(idea: Idea):void {
    this.ideas.push(idea);
  }
  getIdeaById(id: string) {
    return this.angularFire.database.object('ideas/' + id);
  }

  addDonation(amount, ideaToDonateTo) {
    var ideaInFirebase = this.getIdeaById(ideaToDonateTo.$key);
    ideaInFirebase.update({currentFunding: (amount + ideaToDonateTo.currentFunding)})
  }
}
