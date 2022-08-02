import { useState } from 'react'
import MoreInfo from './MoreInfo.js'

export const ParkItem = ({ park, toggleStatus }) => {
    const statusArray = ["uv", "pv", "v"]
    // const [status, setStatus] = useState(park.status)
    const [showMore, setShowMore] = useState(false)

    const showMoreInfo = () => {
        console.log("clicked")
        setShowMore(!showMore)
    }

    const onToggle = () => {
        toggleStatus(park.id)
        // setStatus(park.status)
    }

    const deletePark = () => {
        console.log("this deletes the following park:")
        console.log(park.name)
        console.log("ID: " + park.id)
        console.log()
    }

    return (
        <div className="container">
            <li className={statusArray[park.status]}>
                <div className="parkInfo">
                    <h1>{ park.name }</h1>
                    <h2>{ park.location }</h2>
                </div>
                <div className="buttons">
                    <button onClick={showMoreInfo} >More Info</button>
                    <button onClick={onToggle}>Change Status</button>
                </div>
                {showMore && <MoreInfo deletePark={deletePark} />}
            </li>
        </div>
    )
}

export default ParkItem;