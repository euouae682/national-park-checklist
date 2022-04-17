import { useState } from 'react'

export const Park = ({ name, location, pstatus }) => {
    const [status, setStatus] = useState(pstatus);

    return (
        <li className={status}>
           <h1>{ name }</h1>
           <h2>{ location }</h2>
        </li>
    )
}

export default Park;