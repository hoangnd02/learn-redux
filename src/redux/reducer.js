const intialValue = {
    cart: [],
    total: 0
}

const rootReducer = (state = intialValue, action) => {
    switch(action.type) {
        case "cart/add":
            const newCart = [...state.cart, action.payload]
            return {
                ...state,
                cart: newCart,
                total: newCart.reduce((accu, item) => accu + item.saleOffPrice, 0)
            }
        case "cart/up_count":
            const newCart2 = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }
                return item
            })

            return {
                ...state,
                cart: newCart2,
                total: newCart2.reduce((accu, item) => accu + item.saleOffPrice * item.count, 0)
            }
        case "cart/down_count":
            let newCart3


            newCart3 = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        count: item.count - 1
                    }
                }
                return item
            })

            console.log(newCart3)

            const newData = newCart3.filter(item => item.count !== 0)

            return {
                ...state,
                cart: newData,
                total: newData.reduce((accu, item) => accu + item.saleOffPrice * item.count, 0)
            }
        default: 
            return state
    }
}

export default rootReducer