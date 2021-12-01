import * as actionTypes from './../actions/product'

const initialState = {
    products : [
        {
            nama: "kaos 1"
        },
        {
            nama: "kaos 2"
        }
    ],
    promo: true
}

const reducer = (state = initialState, action) =>{
    // console.log(actionTypes)
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            // console.log('jalan tambah')
            return {
                        ...state,
                        products: [...state.products, action.payload]
                    }
        case actionTypes.DELETE_PRODUCT:
            // console.log('jalan product')
            let data = state.products
            console.log(data)
            data.splice(0, 1);
            console.log(data)
            return {
            ...state,
            products: [...state.products, data]
        }
        default:
          return state
      }
    
    // if(action.type == 'ADD_DATA'){
    //     console.log('action', action)
    //     // console.log('ini sudah di reducer', action)
    //     // let data = state.products
    //     // data.push(action.payload)
    //     // console.log(data)
    //     return {
    //         ...state,
    //         products: [...state.products, action.payload]
    //     }
    // }
    // console.log(state)
    // return state
}

export default reducer