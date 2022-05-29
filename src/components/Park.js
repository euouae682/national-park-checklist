import { useState } from 'react'

export const Park = ({ name, location, pstatus }) => {
    const [status, setStatus] = useState(pstatus);

    return (
        <li className={status}>
           <div className="parkInfo">
               <h1>{ name }</h1>
               <h2>{ location }</h2>
            </div>
            <button>More Info</button>
            <button>Change Status</button>
        </li>
    )
}

export default Park;