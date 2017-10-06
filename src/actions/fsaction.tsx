// Flux Safe Action
export interface FSAction {
    type: string
    payload?: {} | Error
    error?: Error
    meta?: {}
}
