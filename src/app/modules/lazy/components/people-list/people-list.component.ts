import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {peopleAction} from '../../reducers/peopleReducer';
import * as Immutable from 'immutable';

export interface IPerson {
  first: string;
  last: string;
  age?: number;
}

const defaultPerson:IPerson = {
  first: '',
  last: '',
  age: null
};
const ime:IPerson = {
  first: 'Sander',
  last: 'Rombouts'
};

class Person extends Immutable.Record(defaultPerson) {
  age: number;
  get fullName():string {
    return `${this.first} ${this.last} is ${this.age} years old!`;
  }
}

let me = new Person(ime);
let other = <Person>me.set('age', 44)
  .set('first', 'Piet')
  .set('last', 'Paaltjes');

console.log(me.fullName);
console.log(other.fullName);



@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {


  constructor(private store: Store<Person[]>) {
    //this.people = store.select('people');
  }

  ngOnInit() {



    //
    // const pm:PersonMap = Map<string, PersonMap>({
    //   name: 'test',
    //   email: 'email'
    // });
    // const np:Map<string, PersonMap> = pm.set('name', 'value');
    //
    // console.log(pm.toJS());
    //
    // //const pc:RecordClass<PersonMap> = Record(p);
  }

}
//./node_modules/.bin/tsimmutable src/app/models.ts --out=models-imm.ts --indexerType=void --emitRecords=true --emitMarkers=true --emitEmptyRecords=true
