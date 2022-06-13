import { useEffect } from 'react'
import Park from './Park.js';
import EditList from './EditList';
import Settings from './Settings.js';

export const Main = () => {
  const sortParks = () => {
    console.log("this sorts the parks");
  }

  // useEffect(sortParks());

  return (
    <main>
      <div class="lists">
        <h2>Unvisited Parks</h2>
        <ul>
          <Park name="Biscayne National Park" location="Florida" pstatus="uv" />
          <Park name="Aniakchak National Monument" location="Alaska" pstatus="uv" />
        </ul>
        <h2>Partially Visited Parks</h2>
        <ul>
          <Park name="Yellowstone National Park" location="Idaho, Montana, Wyoming" pstatus="pv" />
          <Park name="Black Rock Desert-High Rock Canyon Emigrant Trails National Conservation Area" location="Nevada" pstatus="pv" />
          <Park name="Black Canyon of the Gunnison National Park" location="Colorado" pstatus="pv" />
        </ul>
        <h2>Visited Parks</h2>
        <ul>
          <Park name="Grand Canyon National Park" location="Arizona" pstatus="v" />
          <Park name="Redwood State and National Parks" location="California" pstatus="v" />
          <Park name="Devil's Tower National Monument" location="Wyoming" pstatus="v" />
        </ul>
      </div>
    </main>
  )
}

export default Main;