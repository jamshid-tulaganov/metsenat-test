export interface TableItems {
    id: number,
    text: string
}

export enum TableItemStatus {
    "Bekor qilingan" = 0,
    "Yangi" = 1,
    "Moderatsiyada" = 2,
    "Tasdiqlangan" = 3
}