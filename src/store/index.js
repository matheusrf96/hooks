export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload }}
        case 'sevenfold':
            return { ...state, number: state.number * 7 }
        case 'oneQuarter':
            return { ...state, number: state.number / 25 }
        case 'toInt':
            return { ...state, number: parseInt(state.number) }
        case 'calcNum':
            return { ...state, number: parseFloat(state.number) + parseInt(action.payload) }
        default:
            return state
    }
}
