import "./Banner.css";

function Banner() {
  return (
    <div
      id="banner"
      style={{ height: 175 }}
      className="d-flex align-items-center ps-20 text-light"
    >
      <span>
        <p id="text1" className="h6 text-uppercase">
          Escolha o melhor para você
        </p>
        <div id="text2" className="h1 fs-1">
          nossos produtos<span className="link-warning h1 fs-1">.</span>
        </div>
      </span>
    </div>
  );
}

export default Banner;
