import React, {useEffect, useState} from "react";
import "./adminoferts.scss";
import AdminNav from "../AdminNav/AdminNav";
import {connect} from "react-redux";
import {fetchAllProducts} from "../../../stores/products/products.actions";
import {fetchAllOferts} from "../../../stores/admin/admin.actions";
import ListProducts from "./ListProducts/ListProducts";
import swal from "sweetalert";
import Select from "react-select";

const AdminOferts = ({fetchAllProductsEffect,fetchAllOfertsEffect, STORE_PRODUCTS, STORE_OFERTS})=>{
   
    const [oferts, setOferts] = useState([])

    useEffect(() => {
        fetchAllProductsEffect();
        fetchAllOfertsEffect();
    }, [fetchAllOfertsEffect, fetchAllProductsEffect])

    const handleAddOfert = (idProduct)=>{
        console.log(idProduct)
        let aux = []
        if(STORE_OFERTS && STORE_OFERTS.length >0 ){
            for (let i = 0; i < STORE_OFERTS.length; i++) {
                let obj = {
                    value: STORE_OFERTS[i].ofertStatus,
                    discount: STORE_OFERTS[i].discount
                }
                aux.push(obj)
            }
        }
        setOferts(aux)
        console.log(oferts)
        swal(` Id Product ${oferts}`)
    }


    return (
        <>
        <AdminNav></AdminNav>
            {STORE_PRODUCTS && STORE_PRODUCTS.products && STORE_PRODUCTS.products.length > 0
                ?(
                <div className="--admin-ofert-main">
                    <div className="--admin-ofert-main-col">
                        <h1>Admin Oferts</h1>
                    </div>
                    <div className="--admin-ofert-main-col">
                        {STORE_PRODUCTS.products.map((product, index)=>{
                            return  (
                            <ListProducts
                            key={index}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            description={product.description}
                            artist={product.artist}
                            addOfert= {(id) => handleAddOfert(id)}
                            />
                            )
                        })

                        }
                    </div>
                   <div className="ofert-select">
                      
                   </div>
                   
                </div>
                ):(
                    <p>No hay Productos</p>
                )
            }
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        STORE_PRODUCTS: state.productsReducers,
        STORE_OFERTS: state.adminReducers.oferts,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProductsEffect: () => dispatch(fetchAllProducts()),
        fetchAllOfertsEffect: () => dispatch(fetchAllOferts())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminOferts);

