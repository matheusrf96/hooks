import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const calcFactorial = (n) => {
    if (n < 0) return -1
    if (parseInt(n) === 0) return 1

    return calcFactorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

    useEffect(() => {
        setFactorial(calcFactorial(number))
    }, [number])

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

        </div>
    )
}

export default UseEffect
