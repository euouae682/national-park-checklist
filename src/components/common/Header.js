export const Header = ({ text, toggleEdit, toggleSettings }) => {
  return <header>
      <h1>{ text }</h1>
      <nav>
        <ul>
          <li onClick={toggleEdit} >Edit List</li>
          <li onClick={toggleSettings} >Settings</li>
          <li>About</li>
        </ul>
      </nav>
  </header>;
};

export default Header;