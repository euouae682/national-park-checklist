import { useState } from 'react'
import MoreInfo from './MoreInfo.js';

export const Park = ({ name, location, pstatus }) => {
    const statusArray = ["uv", "pv", "v"];
    const [status, setStatus] = useState(pstatus);
    const [showMore, setShowMore] = useState(false);

    const showMoreInfo = () => {
        console.log("clicked");
        setShowMore(!showMore);
    }

    const toggleStatus = () => {
        setStatus((status + 1) % 3);
        console.log("toggle the status");
        console.log(status);
        console.log(statusArray[status]);
    }

    return (
        <div className="container">
            <li className={statusArray[status]}>
                <div className="parkInfo">
                    <h1>{ name }</h1>
                    <h2>{ location }</h2>
                </div>
                <div className="buttons">
                    {/* <button onClick={showMoreInfo} >More Info</button> */}
                    <button onClick={toggleStatus}>Change Status</button>
                    </div>
            {/* {showMore && <MoreInfo />} */}
            </li>
        </div>
    )
}

export default Park;