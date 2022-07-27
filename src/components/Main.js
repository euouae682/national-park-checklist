import { useState } from 'react';
import Park from './Park.js';

export const Main = ({ list }) => {
  return (
    <main>
      <div class="lists">
        <h2>Unvisited Parks</h2>
        <ul>
          {list.map((park) => (
            <Park key={list.indexOf(park)} name={park["name"]} location={park["location"]} pstatus={park["status"]} />
          ))}
          {/* <Park name="Biscayne National Park" location="Florida" pstatus="0" />
          <Park name="Aniakchak National Monument" location="Alaska" pstatus="0" />
          <Park name="Yellowstone National Park" location="Idaho, Montana, Wyoming" pstatus="1" />
          <Park name="Black Rock Desert-High Rock Canyon Emigrant Trails National Conservation Area" location="Nevada" pstatus="1" />
          <Park name="Black Canyon of the Gunnison National Park" location="Colorado" pstatus="1" />
          <Park name="Grand Canyon National Park" location="Arizona" pstatus="2" />
          <Park name="Redwood State and National Parks" location="California" pstatus="2" />
          <Park name="Devil's Tower National Monument" location="Wyoming" pstatus="2" /> */}
        </ul>
      </div>
    </main>
  )
}

export default Main;