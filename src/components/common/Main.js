import { useEffect } from 'react'
import Park from '../Park.js';
import EditList from '../EditList';
import Settings from '../Settings.js';

export const Main = () => {
  const sortParks = () => {
    console.log("this sorts the parks");
  }

  // useEffect(sortParks());

  return (
    <main>
      <EditList />
        <ul>
            <Park name="Biscayne National Park" location="Florida" pstatus="uv" />
            <Park name="Yellowstone National Park" location="Idaho, Montana, Wyoming" pstatus="pv" />
            <Park name="Grand Canyon National Park" location="Arizona" pstatus="v" />
            <Park name="Redwood National Park" location="California" pstatus="v" />
            <Park name="Black Rock Desert-High Rock Canyon Emigrant Trails National Conservation Area" location="Nevada" pstatus="pv" />
            <Park name="Devil's Tower National Monument" location="Wyoming" pstatus="v" />
            <Park name="Aniakchak National Monument" location="Alaska" pstatus="uv" />
            <Park name="Black Canyon of the Gunnison National Park" location="Colorado" pstatus="pv" />
        </ul>
        <Settings />
    </main>
  )
}

export default Main;