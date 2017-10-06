import { AppUiState, EntitiesState } from '.'

// Application State
export interface StoreState {
    ui: AppUiState
    entities: EntitiesState
}
