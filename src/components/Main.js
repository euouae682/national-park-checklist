// import { useState } from 'react';
import ParkItem from './ParkItem.js';

export const Main = ({ list, toggleStatus }) => {
  return (
    <main>
      <div className="lists">
        <h2>Park List</h2>
        <ul>
          {list.map((park) => (
            <ParkItem key={park.id} park={park} toggleStatus={toggleStatus} />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Main;