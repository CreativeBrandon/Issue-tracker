import { UIActions } from '../../actions'
import { UPDATE_UI } from '../../constants'
import { AppUI } from '../../models'

const initialState: AppUI = {}

export const ui = (state: AppUI = initialState, action: UIActions): AppUI => {
    const { type } = action

    switch (type) {
        case UPDATE_UI:
            return state
        default:
            return state;
    }
}
