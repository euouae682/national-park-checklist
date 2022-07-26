export const Header = ({ text }) => {
  const toggleEditList = () => {
    console.log("this opens the list");
  }

  const toggleSettings = () => {
    console.log("this opens the settings");
  }

  return <header>
      <h1>{ text }</h1>
      <nav>
        <ul>
          <li onClick={toggleEditList} >Edit List</li>
          <li onClick={toggleSettings} >Settings</li>
          <li>About</li>
          <li>Log In</li>
        </ul>
      </nav>
  </header>;
};

export default Header;