import { Component, OnInit } from '@angular/core';
import { CharitableAct } from '../charitable-act.model';
import { Router } from '@angular/router';
import { CharitableActService } from '../services/charitable-act.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-charitable-acts',
  templateUrl: './charitable-acts.component.html',
  styleUrls: ['./charitable-acts.component.css'],
  providers: [CharitableActService]
})

export class CharitableActsComponent implements OnInit {
  charitableActs: FirebaseListObservable<any[]>

  constructor(private router: Router, private charitableActService: CharitableActService) { }

  ngOnInit() {
    this.charitableActs = this.charitableActService.getCharitableActs();
  }
  goToDetailPage(charitableActId: string, objectType: string): void {
    this.router.navigate([objectType, charitableActId]);
  }
}
