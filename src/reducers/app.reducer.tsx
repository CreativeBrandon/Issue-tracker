import { AppAction } from '../actions'
import { StoreState } from '../store';
import { INCREMENT_APP } from '../constants'; 

export const appReducer = (state: StoreState, action: AppAction): StoreState => {
    switch (action.type) {
        case INCREMENT_APP:

        default:
            return state;
    }
}
