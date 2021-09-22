export const loginReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return { ...state, user: { name: action.payload }}
        default:
            return state
    }
}
