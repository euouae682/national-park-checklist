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

  const fetchPark = async (id) => {
    const res = await fetch(`http://localhost:5000/parks/${id}`)
    const item = await res.json()

    return item
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

  const toggleStatus = async (id) => {
    const parkItem = await fetchPark(id)
    const updatedPark = { ...parkItem, status: ((parkItem.status + 1) % 3) }

    const res = await fetch(`http://localhost:5000/parks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedPark)
    })

    const data = await res.json()

    console.log(data);

    setParkList(parkList.map((p) => p.id === id ? {...p, status: data.status} : p));
  }

  const deletePark = async (id) => {
    const res = await fetch(`http://localhost:5000/parks/${id}`, {
      method: 'DELETE'
    })

    setParkList(parkList.filter((p) => p.id !== id));
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
        <Main list={parkList} toggleStatus={toggleStatus} deletePark={deletePark} />
        {showSettings && <Settings />}
      </div>
      <Footer text="A project by euouae" />
    </div>
  );
}

export default App;
