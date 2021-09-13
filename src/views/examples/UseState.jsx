import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/PageTitle'

const UseState = (props) => {
    const defaultValue = 0
    const [count, setCount] = useState(defaultValue)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="#01" />
            <div className="center">
                <span className="text">{ count }</span>
                <div>
                    <button className="btn" onClick={() => setCount(current => current - 5)}>-5</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(defaultValue)}>0</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(current => current + 5)}>+5</button>
                </div>
            </div>

            <SectionTitle title="#02" />
        </div>
    )
}

export default UseState
