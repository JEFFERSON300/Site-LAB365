import "./Products.css";
import PropTypes from "prop-types";
import CardProductComponent from "../CardProductComponent/CardProductComponent";

function Products({ allProducts }) {
  return (
    <div>
      {allProducts.length > 0 ? (
        Array(allProducts.length)
          .fill(true)
          .map((_, i) => (
            <CardProductComponent
              key={allProducts[i].id}
              productItem={allProducts[i]}
            />
          ))
      ) : (
        <p>Nenhum Produto</p>
      )}
    </div>
  );
}

Products.propTypes = {
  allProducts: PropTypes.arrayOf(PropTypes.object),
};

export default Products;
