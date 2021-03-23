import "./listProduct.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Admin from "../AdminNav";
import { connect } from "react-redux";
import { fetchAllProducts, deleteProducts } from "../../../stores/admin/admin.actions";
const Edit = ({ fetchCartEffect, fetchAllProductsEffect, deleteProductsEffect, STORE_CART }) => {
  var user = false;
  const history = useHistory();

  useEffect(() => {
    fetchCartEffect(user);
    fetchAllProductsEffect()
  }, [fetchCartEffect, fetchAllProductsEffect, user]);
  const handleClickEdit = (productId) => {
    history.push(`/put/${productId}`);
  };
  const handleClickDelete = (id) => {
    console.log(id)
    deleteProductsEffect(id)
    fetchAllProductsEffect()
  }
  return (
    <div>
      <Admin />
      <div className="--Cart">
        <div className="--Cart-items">
          {STORE_CART && STORE_CART.length > 0 ? (
            <>
              <div>
                {STORE_CART.map((product, index) => {
                  return (
                    <div key={index} className="--ItemCard">
                      <div className="--ItemCard-left">
                        <img
                          alt="albumImg"
                          src={`http://localhost:3001/images/${product.image}`}
                        />
                        <div className="--ItemCard-data">
                          <h2>{product.name}</h2>
                          <p>{product.autor}</p>
                        </div>
                      </div>
                      <div className="--ItemCard-right">
                        <span
                          className="material-icons --ItemCard-editItem"
                          onClick={() => handleClickEdit(product.id)}
                        >
                          border_color
                        </span>
                        <span className="material-icons --ItemCard-deletItem"
                          onClick={() => handleClickDelete(product.id)}

                        >
                          delete
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div></div>
            </>
          ) : (
            <p className="empty-cart">Empty Cart</p>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    STORE_CART: state.adminReducers.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCartEffect: (user) => dispatch(fetchAllProducts(user)),
    deleteProductsEffect: (id) => dispatch(deleteProducts(id)),
    fetchAllProductsEffect: () => dispatch(fetchAllProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
