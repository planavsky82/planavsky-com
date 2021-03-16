import { User } from '../shared/models/user';
import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export function addUserReducer(state: User[] = [], action) {
  switch (action.type) {
    case ADD_USER:
        return [...state, action.payload];
    default:
        return state;
    }
}
