import "./listCat.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Admin from "../AdminNav";
import { connect } from "react-redux";
import { fetchAllProducts, deleteCategory, fetchAllCategories } from "../../../stores/admin/admin.actions";
const ListCategories = ({ fetchCartEffect, fetchAllCategoriesEffect, deleteCategoryEffect, STORE_CATS }) => {
  var user = false;
  const history = useHistory();

  useEffect(() => {
    fetchAllCategoriesEffect()
  }, [fetchAllCategoriesEffect]);

  const handleClickEdit = (categoryId, name, description) => {
    history.push(`/editCat/${categoryId}/${name}/${description}`);
  };
  const handleClickDelete = (id) => {
    try {
      return deleteCategoryEffect(id);
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <Admin />
      <div className="--Cart">
        <div className="--Cart-items">
          {STORE_CATS && STORE_CATS.length > 0 ? (
            <>
              <div>
                {STORE_CATS.map((category, index) => {
                  return (
                    <div key={index} className="--ItemCard">
                      <div className="--ItemCard-left">
                        <div className="--ItemCard-data">
                          <h2>{category.name}</h2>
                          <p>{category.description}</p>
                        </div>
                      </div>
                      <div className="--ItemCard-right">
                        <span
                          className="material-icons --ItemCard-editItem"
                          onClick={() => handleClickEdit(category.id, category.name, category.description)}
                        >
                          border_color
                        </span>
                        <span className="material-icons --ItemCard-deletItem"
                          onClick={() => handleClickDelete(category.id)}

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
            <p className="empy-cart">Empy Cart</p>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    STORE_CATS: state.adminReducers.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategoriesEffect: () => dispatch(fetchAllCategories()),
    deleteCategoryEffect: (id) => dispatch(deleteCategory(id)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);