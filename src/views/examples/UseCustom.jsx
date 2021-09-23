import React from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const UseRef = (props) => {
    const [count, inc, dec] = useCounter()
    const resp = useFetch('http://files.cod3r.com.br/curso-react/estados.json')

    const showStates = (states) => {
        return states.map((state, i) => <li key={ i }>{ state.nome } - { state.sigla }</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="#01" />
            <div className="center">
                <span className="text">{ count }</span>
                <div>
                    <button className="btn" onClick={() => dec() }>-1</button>
                    <button className="btn" onClick={() => inc() }>+1</button>
                </div>
            </div>

            <SectionTitle title="#02" />
            <div className="center">
                <ul>
                    { !resp.loading ? showStates(resp.data) : false }
                </ul>
            </div>
        </div>
    )
}

export default UseRef
