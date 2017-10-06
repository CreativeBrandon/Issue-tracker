import { AppUiState, EntitiesState, NotificationsState } from '.'

// Application State
export interface StoreState {
    ui: AppUiState
    entities: EntitiesState
    notifications: NotificationsState
}
