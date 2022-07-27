import { useState, useEffect } from 'react'
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import EditList from './components/EditList.js';
import Main from './components/Main.js';
import Settings from './components/Settings.js';

function App() {
  const [parkList, setParkList] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const getParks = async () => {
      const parksFromServer = await fetchData();
      setParkList(parksFromServer);
    }

    getParks();
  }, [])

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/parks');
    const data = await res.json();

    return data;
  }

  const addPark = async (park) => {
    const res = await fetch('http://localhost:5000/parks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(park)
    });

    const data = await res.json()

    setParkList([...parkList, data])
  }

  // const onSubmitEdit = (pname, ploc) => {
  //   setParkList([...parkList, {"name": pname, "location": ploc, "status": 0}]);

  //   console.log(parkList);
  // }

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  }

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  }

  // useEffect(updateParks());

  return (
    <div className="App">
      <Header text="National Park Checklist" toggleEdit={toggleEdit} toggleSettings={toggleSettings} />
      <div className="flex">
        {showEdit && <EditList onSubmitEdit={addPark} />}
        <Main list={parkList} />
        {showSettings && <Settings />}
      </div>
      <Footer text="A project by euouae" />
    </div>
  );
}

export default App;
