/* State card class to represent a Card model */

import { Component, OnInit, Input } from '@angular/core';
import { State } from '../../../models/state.model';

@Component({
  selector: 'app-state-card',
  templateUrl: './state-card.component.html',
  styleUrls: ['./state-card.component.css']
})
export class StateCardComponent implements OnInit {

  // Private data members
  @Input() stateObject: State;

  constructor() { }

  ngOnInit() {

  }

}
