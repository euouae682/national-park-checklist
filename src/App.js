import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';

function App() {
  return (
    <div className="App">
      <Header text="national park checklist" />
      <Main />
      <Footer text="a project" />
    </div>
  );
}

export default App;
