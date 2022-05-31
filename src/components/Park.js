import { useState } from 'react'
import MoreInfo from './MoreInfo.js';

export const Park = ({ name, location, pstatus }) => {
    const [status, setStatus] = useState(pstatus);
    const [showMore, setShowMore] = useState(false);

    const showMoreInfo = () => {
        console.log("clicked");
        setShowMore(!showMore);
    }

    return (
        <li className={status}>
           <div className="parkInfo">
               <h1>{ name }</h1>
               <h2>{ location }</h2>
            </div>
            <div className="buttons">
                <button onClick={showMoreInfo} >More Info</button>
                <button>Change Status</button>
            </div>
            {showMore && <MoreInfo />}
        </li>
    )
}

export default Park;