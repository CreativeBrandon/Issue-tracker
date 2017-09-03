import * as constants from '../constants';

export interface IncrementApp {
    type: constants.INCREMENT_APP
}

export interface DecrementApp {
    type: constants.DECREMENT_APP
}

export type AppAction = IncrementApp | DecrementApp
