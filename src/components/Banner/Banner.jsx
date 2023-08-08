import "./Banner.css";
import PropTypes from "prop-types";

function Banner({ title, subtitle }) {
  return (
    <div
      id="banner"
      style={{ height: 175 }}
      className="d-flex align-items-center ps-20 text-light"
    >
      <span>
        <p id="text1" className="h6 text-uppercase">
          {title}
        </p>
        <div id="text2" className="h1 fs-1">
          {subtitle}
          <span className="link-warning h1 fs-1">.</span>
        </div>
      </span>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Banner;
