import { ActionReducer, Action } from '@ngrx/store';
import { merge, pick } from 'lodash-es';

function setSavedState(state: any, localStorageKey: string) {
  console.log('bbbbbbbb');
  console.log('dddd', state);
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}

function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

// the keys from state which we'd like to save.
const stateKeys = ['user.name', 'user.pwd', 'user.admin', 'user.email'];
// the key for the local storage.
const localStorageKey = '__app_storage__';

export function storageMetaReducer<S, A extends Action = Action> (reducer: ActionReducer<S, A>) {
  console.log('aaaaaaaa');
  let onInit = true; // after load/refresh…
  return function(state: S, action: A): S {
    console.log(state);
    console.log(action);
    // reduce the nextState.
    const nextState = reducer(state, action);
    // init the application state.
    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }
    // save the next state to the application storage.
    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}
