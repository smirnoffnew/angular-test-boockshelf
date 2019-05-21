import { Action } from '@ngrx/store';

export enum ActionTypes {
  getBooks = 'getBooks',
}

export class GetBooks implements Action {
  readonly type = ActionTypes.getBooks;
  constructor(public load: any) {}
}

export type Actions = GetBooks
