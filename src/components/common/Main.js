import React from 'react'
import Park from '../Park.js';

export const Main = () => {
  return (
    <main>
        <ul>
            <Park name="Biscayne National Park" location="Florida" status="uv" />
            <Park name="Yellowstone National Park" location="Idaho, Montana, Wyoming" status="pv" />
            <Park name="Grand Canyon National Park" location="Arizona" status="v" />
            <Park name="Redwood National Park" location="California" status="v" />
            <Park name="Black Rock Desert-High Rock Canyon Emigrant Trails National Conservation Area" location="Nevada" status="pv" />
            <Park name="Devil's Tower National Monument" location="Wyoming" status="v" />
            <Park name="Aniakchak National Monument" location="Alaska" status="uv" />
            <Park name="Black Canyon of the Gunnison National Park" location="Colorado" status="pv" />
        </ul>
    </main>
  )
}

export default Main;