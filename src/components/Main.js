import React from 'react'
import Park from './Park.js';

export const Main = () => {
  return (
    <main>
        <ul>
            <li><Park name="Biscayne National Park" location="Florida" status="unvisited" /></li>
            <li><Park name="Yellowstone National Park" location="Idaho, Montana, Wyoming" status="partvisited" /></li>
            <li><Park name="Grand Canyon National Park" location="Arizona" status="visited" /></li>
            <li><Park name="Redwood National Park" location="California" status="visited" /></li>
        </ul>
    </main>
  )
}

export default Main;