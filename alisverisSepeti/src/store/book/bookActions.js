import { types } from "../types"

export const ekle=(book)=> ({
    type: types.EKLE,
    payload:book

})
export const artir=(id)=> ({
    type: types.ARTIR,
    payload:book
})

export const azalt=(id)=> ({
    type: types.AZALT,
    payload:book
})

export const cikar=(id)=> ({
    type: types.CIKAR,
    payload:book
})