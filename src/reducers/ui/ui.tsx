import { AppAction } from '../../actions'
import { UPDATE_UI } from '../../constants'

export interface AppUI {}

const initialState: AppUI = {}

export const ui = (state: AppUI = initialState, action: AppAction): AppUI => {
    const { type } = action

    switch (type) {
        case UPDATE_UI:
            return state
        default:
            return state;
    }
}
