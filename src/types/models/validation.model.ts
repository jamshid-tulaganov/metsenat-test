import type { Ref } from 'vue'

export interface ValidationErrorMessage {
    error: boolean,
    message: Array<ErrorObject>
}


export interface ErrorObject {
    $propertyPath?: string
    $property?: string
    $validator?: string
    $message: string | Ref<string>
    $params?: object
    $pending?: boolean
    $response?: any,
    $uid?: string,
}
