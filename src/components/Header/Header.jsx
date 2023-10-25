import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Home, NotFound } from "../../pages/index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/" className="s">
          <button className="header_logo">StreamLine</button>
        </Link>
        <input
          type="text"
          className="header_searchBar"
          placeholder="Поиск"
        ></input>
        <button className="header_searchBar_btn">
          <AiOutlineSearch size={30} color="#fff" />
        </button>
        <button className="header_btn">Челябинск</button>
      </div>
    </div>
  );
};

export default Header;
