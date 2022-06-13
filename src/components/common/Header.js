export const Header = ({ text }) => {
  return <header>
      <h1>{ text }</h1>
      <nav>
        <ul>
          <li>Edit List</li>
          <li>Settings</li>
        </ul>
      </nav>
  </header>;
};

export default Header;