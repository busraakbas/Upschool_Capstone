import "../styles.css";
import Dropdown from "react-dropdown";
const Header = ({ state, avatar }) => {
  const options = ["Movies", "Popular", "Top Rated"];
  const defaultOption = options[0];
  return state ? (
    <div id="HeaderContainer">
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="Logo"
        width={180}
        height={80}
      />
    </div>
  ) : (
    <div id="HeaderContainer2">
      <img
        id="logo"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="Logo"
        width={180}
        height={80}
      />
      <Dropdown
        options={options}
        // onChange={this._onSelect}
        value={defaultOption}
        placeholderClassName="DropDownPlaceholderClassName"
        menuClassName="DropDownClassName2"
      />
      <div id="avatar">{avatar}</div>
    </div>
  );
};

export default Header;
