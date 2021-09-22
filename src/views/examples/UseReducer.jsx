import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import {
    numberAdd2,
    login,
    sevenfold,
    oneQuarter,
    toInt,
    calcNum,
} from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [number, setNumber] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                { state.user
                    ? <span className="text">{ state.user.name }</span>
                    : <span className="text">Sem usuário logado</span>
                }
                <span className="text">{ state.number }</span>

                <div className="center">
                    <input
                        type="number"
                        className="input"
                        onChange={(e) => setNumber(e.target.value) }
                        value={ number }
                    />

                    <span className="text">
                        <button className="btn" onClick={ () => login(dispatch, 'matheus') }>Login</button>
                        <button className="btn" onClick={ () => numberAdd2(dispatch) }>+2</button>
                        <button className="btn" onClick={ () => sevenfold(dispatch) }>*7</button>
                        <button className="btn" onClick={ () => oneQuarter(dispatch) }>/25</button>
                        <button className="btn" onClick={ () => toInt(dispatch) }>Int</button>
                        <button className="btn" onClick={ () => calcNum(dispatch, number) }>Add { number }</button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
