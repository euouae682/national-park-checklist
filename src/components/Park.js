import React from 'react'

export const Park = ({ name, location, status }) => {
  return (
    <div className="park">
        <h1>{ name }</h1>
        <h2>{ location }</h2>
    </div>
  )
}

export default Park;