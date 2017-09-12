import { AppUI, Post} from '.';

export interface Entities {
    postsById: Post[]
}

// Application State
export interface StoreState {
    ui: AppUI
    entities: Entities
}
