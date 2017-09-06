import * as constants from '../constants';
import { AppUI } from '../models'

export interface UpdateUI {
    type: constants.UPDATE_UI;
    payload: AppUI;
}

export type UIActions = UpdateUI

export function UpdateUI(ui: AppUI): UpdateUI {
    return {
        type: constants.UPDATE_UI,
        payload: ui
    }
}
