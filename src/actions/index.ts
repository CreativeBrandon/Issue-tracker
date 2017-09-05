import * as constants from '../constants';
import { AppUI, Post } from '../reducers'

export interface AddPost {
    type: constants.ADD_POST;
    payload: Post;
}

export interface UpdatePost {
    type: constants.UPDATE_POST;
    payload: Post;
}

export interface RemovePost {
    type: constants.REMOVE_POST;
    payload: { id: number };
}

export interface UpdateUI {
    type: constants.UPDATE_UI;
    payload: AppUI;
}

export type AppAction = AddPost | UpdatePost | RemovePost | UpdateUI
