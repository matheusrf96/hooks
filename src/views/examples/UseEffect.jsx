import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const calcFactorial = (n) => {
    if (n < 0) return -1
    if (parseInt(n) === 0) return 1

    return calcFactorial(n - 1) * n
}

const checkIfIsEven = (n) => {
    return (n % 2 === 1) ? false : true
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [isEven, setIsEven] = useState(false)

    useEffect(() => {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(() => {
        setIsEven(checkIfIsEven(factorial))
    }, [factorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="#01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{ factorial === -1 ? 'Não existe' : factorial }</span>
                </div>

                <input
                    type="number"
                    className="input"
                    value={ number }
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="#02" />
            <div className="center">
                <div>
                    <span className="text">O fatorial é: </span>
                    <span className="text red">{
                        factorial !== -1
                            ? isEven ? 'Par' : 'Ímpar'
                            : 'Inválido'
                    }</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
