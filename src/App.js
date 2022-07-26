import { useState } from 'react'
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import EditList from './components/EditList.js';
import Main from './components/Main.js';
import Settings from './components/Settings.js';

function App() {
  const [parkList, setParkList] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const updateParks = () => {
    console.log("this updates the parks");
  }

  const onSubmitEdit = () => {
    console.log("this edits the list")
  }

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
        {showEdit && <EditList />}
        <Main />
        {showSettings && <Settings />}
      </div>
      <Footer text="A project by euouae" />
    </div>
  );
}

export default App;
