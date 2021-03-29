import "./Catalog.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { filterbyGenre } from "../../stores/products/products.actions";

//Internationalization
import { withTranslation } from 'react-i18next';

const SearchBar = ({ t, search, fetchAllProductsEffect, categories, getProductsByGenreEffect, STORE_PRODUCTS, filter_PRODUCTS }) => {

    const [input, setInput] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        getProductsByGenreEffect(input)

    }
    const handleChange = (e) => {
        setInput(e.target.value)

    }
    const handleGenre = (e) => {
        setInput(e.target.name)
    }


    return (

        <form onSubmit={(e) => { handleSubmit(e) }}>

            {categories.map((category, index) => {

                if (category.name !== "") {
                    return (
                        <button key={index} name={category.name}
                            onClick={(e) => { handleGenre(e) }} >
                            {category.name}
                        </button>
                    )
                }

            })}
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        STORE_PRODUCTS: state.productsReducers,
        filter_PRODUCTS: state.productsReducers.productFilter,
        categories: state.adminReducers.categories

    };
};
const mapDispatchToProps = (dispatch) => {
    return {

        getProductsByGenreEffect: (payload) => dispatch(filterbyGenre(payload)),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SearchBar));
