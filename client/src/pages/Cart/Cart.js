import "./Cart.css"
import React from "react"
import ItemCard from "../../components/Cart/ItemCard/ItemCard"
import SummaryCard from "../../components/Cart/SummaryCard/SummaryCard";

const Cart = () => {
    const Items=[
        {
            name:"nombre prueba",
            autor:"testing",
            price:"123",
        },
        {
            name:"nombre prueba",
            autor:"testing",
            price:"123",
        },
        {
            name:"nombre prueba",
            autor:"testing",
            price:"123",
        },
        {
            name:"nombre prueba",
            autor:"testing",
            price:"123",
        },
    ];
    return (
        <div className="--Cart">
            <div className="--Cart-items">
                {
                    Items.map(oneItem=>
                        <ItemCard name={oneItem.name} autor={oneItem.autor} price={oneItem.price}/>
                    )
                }
            </div>
            <SummaryCard subtotal="1210" total="1100" discount="110"/>
        </div>
    )
}

export default Cart;