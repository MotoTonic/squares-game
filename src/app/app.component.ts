import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Square} from './square';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'squares-game';
  description = 'Squares-Game';
  squaresArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  squares$: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.squares$ = firestore.collection('squares-colors').valueChanges();
  }

  ngOnInit(): void {
  }

}