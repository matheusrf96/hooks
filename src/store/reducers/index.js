import { numberReducer } from "./number"
import { loginReducer } from "./login"

export const reducer = (state, action) => {
    let newState = numberReducer(state, action)
    newState = loginReducer(newState, action)

    return newState
}
