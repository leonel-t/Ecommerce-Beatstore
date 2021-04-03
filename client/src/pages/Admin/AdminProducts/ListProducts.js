import "./listProduct.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AdminNav from "../AdminNav/AdminNav";
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
    id ? deleteProductsEffect(id) : console.log("no hay id")
    fetchAllProductsEffect()
  }
  return (
    <>
    <AdminNav></AdminNav>
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
                      <span onClick={() => handleClickEdit(product.id)}>
                        <i className="far fa-edit --ItemCard-editItem"></i>
                      </span>
                      <span onClick={() => handleClickDelete(product.id)}>
                        <i className="fas fa-trash-alt --ItemCard-deletItem"></i>
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
</>
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
