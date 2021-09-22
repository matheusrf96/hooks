export const numberAdd2 = (dispatch) => {
    dispatch({ type: 'numberAdd2' })
}

export const sevenfold = (dispatch) => {
    dispatch({ type: 'sevenfold' })
}

export const oneQuarter = (dispatch) => {
    dispatch({ type: 'oneQuarter' })
}

export const toInt = (dispatch) => {
    dispatch({ type: 'toInt' })
}

export const calcNum = (dispatch, number) => {
    dispatch({ type: 'calcNum', payload: number })
}
