
export interface detailDtoList {
    blindBoxId: number
    img: string
    isHidden: boolean
    itemsId: number
    marketPrice: number
    name: string
    skuId: number
    type: number
}

export interface item {
    c2cItemsId: number
    c2cItemsName: string
    detailDtoList: detailDtoList[]
    isMyPublish: boolean
    paymentTime: number
    price: number
    showMarketPrice: string
    showPrice: string
    totalItemsCount: number
    type: number
    uface: string
    uid: string
    uname: string
    uspaceJumpUrl: any,
}