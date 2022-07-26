import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import Main from './components/Main.js';

function App() {
  const updateParks = () => {
    console.log("this updates the parks");
  }

  // useEffect(updateParks());
  
  return (
    <div className="App">
      <Header text="National Park Checklist" />
      <Main />
      <Footer text="A project by euouae" />
    </div>
  );
}

export default App;
