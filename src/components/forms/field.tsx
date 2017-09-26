export interface ReduxFormMeta {
    touched: boolean
    error: any
    warning: any
}

export interface RenderField {
    input: {}
    label: string
    type: string
    meta: ReduxFormMeta
}
