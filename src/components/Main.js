// import { useState } from 'react';
import ParkItem from './ParkItem.js';

export const Main = ({ list, toggleStatus }) => {
  return (
    <main>
      <div className="lists">
        <h2>Park List</h2>
        <ul>
          {list.length ? list.map((park) => (
            <ParkItem key={park.id} park={park} toggleStatus={toggleStatus} />
          )) : <p>There are currently no parks in your list. Click 'Edit List' to add one!</p>}
        </ul>
      </div>
    </main>
  )
}

export default Main;