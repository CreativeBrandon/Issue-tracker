import { StoreState } from '../models'

const appStorageKey: string = 'appName_state';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(appStorageKey)
        if (serializedState === null) { return undefined }

        return JSON.parse(serializedState)
    } catch (err) {
        return undefined // ToDo: log error
    }
}

export const saveState = (state: StoreState) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(appStorageKey, serializedState)
    } catch (err) {
        // ToDo: log error
    }
}
