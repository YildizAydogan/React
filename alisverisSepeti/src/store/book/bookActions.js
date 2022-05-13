import { types } from "../types"

export const ekle=(book)=> ({
    type: types.EKLE,
    payload:book

})
export const artir=(book)=> ({
    type: types.ARTIR,
    payload:book
})

export const azalt=(book)=> ({
    type: types.AZALT,
    payload:book
})

export const cikar=(book)=> ({
    type: types.CIKAR,
    payload:book
})