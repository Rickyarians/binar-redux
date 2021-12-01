import * as actionTypes from '../actions/product'

const initialState = {
    provinsilist : [
        {
            nama: "provinsi 1"
        },
        {
            nama: "provinsi 2"
        }
    ],
    promo: true
}

const reducer = (state = initialState, action) =>{

    // console.log(state)
    return state
}

export default reducer