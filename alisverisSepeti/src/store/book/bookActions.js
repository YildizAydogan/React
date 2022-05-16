import { types } from "../types"

export const ekle=(book)=> ({
    type: types.EKLE,
    payload:book

})
export const artir=(id)=> ({
    type: types.ARTIR,
    payload:id
})

export const azalt=(id)=> ({
    type: types.AZALT,
    payload:id
})

export const cikar=(id)=> ({
    type: types.CIKAR,
    payload:id
})