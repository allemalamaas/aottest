import {Action} from "@ngrx/store";
import { Map, List } from 'immutable';
/**
 * Created by sanderrombouts on 21/01/2017.
 */

export interface IPeopleActionTypes {
  ADD_PERSON:string;
  REMOVE_PERSON: string;
  UPDATE_PERSON: string;
}

const peopleActionTypes:IPeopleActionTypes = buildCustomEnum<IPeopleActionTypes>(['ADD_PERSON', 'REMOVE_PERSON', 'UPDATE_PERSON']);

export function buildCustomEnum<T>(names:string[] | string): T {

  let result:any = {};

  if (typeof names === 'string') {
    names = [names];
  }
  names.forEach(name => {
    result[name] = name;
  });

  return result as T;

}
export interface Person {
  name: string;
  email: string;
}

export const peopleAction = {
  addPerson: function(person:any) {
    return {
      type: peopleActionTypes.ADD_PERSON,
      payload: {
        person: person
      }
    }
  }
};

export function peopleReducer(state:List<any> = List<any>(), action: Action) {
  switch (action.type) {
    case peopleActionTypes.ADD_PERSON:
      state = state.push(action.payload.person);
  }
  return state;
}
