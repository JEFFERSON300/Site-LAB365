import "./CardProductComponent.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CardProductComponent(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getImage = (name) => {
    const BASEPATH = "./images/NAME_IMAGE";
    return BASEPATH.replace("NAME_IMAGE", name);
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
            onClick={handleShow}
            style={{ position: "relative" }}
            src={getImage(props.productItem.imagePath)}
            className="rounded-start img-fluid"
            alt="..."
          />
          <p
            style={{
              position: "absolute",
              color: "white",
              top: "11.5rem",
              backgroundColor: "#FFC107",
              fontSize: "20px",
            }}
          >
            {props.productItem.price ? `R$` + props.productItem.price : ""}
          </p>
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

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do Produto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>{props.productItem.product}</h4>
            <h4>
              {props.productItem.price ? `R$ ` + props.productItem.price : ""}
            </h4>
          </div>
          <img
            style={{ maxWidth: "100%" }}
            src={getImage(props.productItem.imagePath)}
            className="rounded-start img-fluid"
            alt="..."
          />
          <p>{props.productItem.description}</p>

          <h4>Características</h4>
          <p>
            <ul
              style={{ display: "flex", justifyContent: "space-between" }}
              className="list-unstyled"
            >
              {props.productItem.characteristics.length > 0
                ? props.productItem.characteristics.map(characterItem)
                : characterEmpty()}
            </ul>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
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
    price: PropTypes.number,
  }),
};

export default CardProductComponent;
