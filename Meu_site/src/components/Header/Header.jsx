import "./Header.css";
import PropTypes from "prop-types";

function Header(props) {
  const menuItem = (item) => {
    return (
      <li className="nav-item">
        <a href="#" className="nav-link active text-light fw-bold me-3 fs-6">
          {item.label}
        </a>
      </li>
    );
  };

  const menuEmpty = () => {
    return <p>Nada</p>;
  };

  return (
    <nav style={{ height: 100 }}>
      <ul className="nav d-flex flex-wrap align-items-center bg-dark w-100 h-100 ">
        <li className="nav-item me-auto ms-1.25">
          <a className="nav-link active text-light fw-bold fs-2" href="#">
            BikeFloripa
          </a>
        </li>
        {props.menu.length > 0 ? props.menu.map(menuItem) : menuEmpty()}
      </ul>
    </nav>
  );
}

Header.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Header;
