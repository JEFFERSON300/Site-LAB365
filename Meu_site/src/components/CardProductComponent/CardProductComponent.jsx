import "./CardProductComponent.css";
import PropTypes from "prop-types";

function CardProductComponent(props) {
  
  const getImage = (name) => {
    const BASEPATH = "./images/NAME_IMAGE";
    return (BASEPATH.replace("NAME_IMAGE",name));
  };

  const characterItem = (item) => {
    return (
      <li className="card-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(255,193,7)"
          className="bi bi-bookmark-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
        </svg>
        <span className="ps-3">{item}</span>
      </li>
    );
  };

  const characterEmpty = () => {
    return (
      <li className="card-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(255,193,7)"
          className="bi bi-bookmark-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
        </svg>
        Nenhuma caracteristica do produto.
      </li>
    );
  };

  return (
    <div className="card mb-3 bg-white d-flex flex-wrap m-5 me-5 mt-5 mb-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={getImage(props.productItem.imagePath)}
            className="rounded-start img-fluid"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex align-items-center">
            <div>
              <h5 className="card-title text-uppercase fw-bold">
                {props.productItem.product}
              </h5>
              <p className="card-text text-justify">
                {props.productItem.description}
              </p>
              <div className="d-flex justify-content-between align-items-end">
                <ul className="list-unstyled">
                  {props.productItem.characteristics.length > 0
                    ? props.productItem.characteristics.map(characterItem)
                    : characterEmpty()}
                </ul>
                <button
                  type="button"
                  className="btn btn-warning text-uppercase fw-bold "
                >
                  Mais sobre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardProductComponent.propTypes = {
  productItem: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    product: PropTypes.string,
    description: PropTypes.string,
    characteristics: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default CardProductComponent;
