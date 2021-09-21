import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    const { state, setState } = useContext(DataContext)
    const { number, text, setNumber, setText } = useContext(AppContext)

    const addNumber = (delta) => {
        setState({
            ...state,
            number: state.number + delta,
        })
    }

    useEffect(() => {
        if (number >= 1250) {
            setText('Eita!')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="#01" />
            <div className="center">
                <span className="text">{ state.text }</span>
                <span className="text">{ state.number }</span>
            </div>

            <div className="center">
                <span className="text">
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(1)}>-+1</button>
                </span>
            </div>

            <SectionTitle title="#02" />
            <div className="center">
                <span className="text">{ text }</span>
                <span className="text">{ number }</span>
            </div>

            <div className="center">
                <span className="text">
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </span>
            </div>
        </div>
    )
}

export default UseContext
