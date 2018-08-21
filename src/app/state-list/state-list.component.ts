/* StateList class to retrieve/hold states data and implement search/sort functionality */

import { Component, OnInit } from '@angular/core';
import { GetStatesService } from './.././../services/get-states.service';
import { State } from './../../models/state.model';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css'],
  providers: [GetStatesService]
})

export class StateListComponent implements OnInit {
  // Member variables, getter/setter methods
  private static ASCENDING = true;
  private static DESCENDING = false;
  private statesList: State[];

  private _searchTerm: string;
  private _sortDirection: boolean;

  filteredStates: State[];
  page: any;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredStates = this.filterStates(this._searchTerm);
    this.filteredStates = this.sortByPopulation(this._sortDirection);
  }

  get sortDirection(): boolean {
    return this._sortDirection;
  }

  set sortDirection(value: boolean) {
    this._sortDirection = value;
    this.sortByPopulation(this._sortDirection);
  }

  constructor(private getStatesService: GetStatesService) { }

  // Loading the states data & sorting in ASCENDING order by default
  ngOnInit() {
    this.getStatesService.getStates('./assets/states.json').subscribe(
      (response) => {
        this.statesList = response;
        this.filteredStates = this.statesList;
        this.sortDirection = StateListComponent.ASCENDING;
        console.log('Successfully loaded states.json');
      },
      (error) => {
        console.error('Failed to get states.json', error);
      }
    );
  }

  /* Sort and search functionality */

  // Returns states that have searchString in the beginning of their name (at index = 0)
  filterStates(searchString: string): State[] {
    return this.statesList.filter(element => element.state.toLowerCase().indexOf(searchString.toLowerCase()) === 0);
  }

  sortButton() {
    if (this._sortDirection === StateListComponent.ASCENDING) {
      this.sortDirection = StateListComponent.DESCENDING;
    } else {
      this.sortDirection = StateListComponent.ASCENDING;
    }
  }

  sortByPopulation(direction: boolean): State[] {
    if (direction === StateListComponent.ASCENDING) {
      return this.filteredStates.sort((a, b) => this.sortComparator(b, a));
    } else {
      return this.filteredStates.sort((a, b) => this.sortComparator(a, b));
    }
  }

  sortComparator(a, b) {
    return a.population - b.population;
  }

}
