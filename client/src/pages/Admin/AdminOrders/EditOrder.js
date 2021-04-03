import React from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { putCategoryById } from "../../../stores/admin/admin.actions";
import Select from "react-select";
import axios from "axios";
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

function EditOrders({ orders }) {
    const [orderStatus, setOrderStatus] = React.useState([])
    const { id } = useParams();
    const history = useHistory();

    const customStyles = {
        control: (base, state) => ({
            ...base,
            color: "white",
            margin: "12px",
            // match with the menu
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "yellow" : "green",
            // Removes weird border around container
            boxShadow: state.isFocused ? null : null,
            background: "black",
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "red" : "blue",
                background: "purple"
            }
        }),
        menu: (base, state) => ({
            ...base,
            // override border radius to match the box
            borderRadius: 0,

            // kill the gap
            marginTop: 0,
            background: state.isFocused ? "yellow" : "green",
            "&:hover": {
                // Overwrittes the different states of border
                background: "blue"
            }
        }),
        menuList: base => ({
            ...base,
            // kill the white space on first and last option
            padding: 0,
            background: "black",
            "&:hover": {
                // Overwrittes the different states of border
                background: "black"
            }

        }),
        menuPortal: base => ({
            background: "red",

            "&:hover": {
                // Overwrittes the different states of border
                background: "blue"
            }
        }),
        singleValue: base => ({


            padding: "5px",
            borderRadius: "5px",
            outline: "none",
        }),


        group: base => ({
            background: "yellow",
            color: "black"
        })
    };
    const optionStatus = [{
        value: "process",
        label: "Process"
    }, {
        value: "create",
        label: "Create"
    }, {
        value: "cancel",
        label: "Cancel"
    }, {
        value: "complete",
        label: "Complete"
    },
    ]
    let order = orders.find(order => order.id == id)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {


            await axios.put(`http://localhost:3001/order/${id}`, { orderStatus: orderStatus.value })
            swal({
                title: "Order " + id + " set to " + orderStatus.value,
                icon: "success",
                //buttons: true,
            })
            history.push(`/admin/listorders`);

        } catch (error) {

        }

    }
    return (

        <div>
            {orders && orders.length > 0 ? (
                <form className="catAdd" onSubmit={(e) => handleSubmit(e)}>

                    <h1> Order id: {order.id}</h1>
                    <h1> User id: {order.userId}</h1>
                    <h1> Total: ${order.total}</h1>
                    <h1> Order status: {order.orderStatus}</h1>
                    <label>Set order status to:</label>
                    <Select
                        name="selectStatus"
                        options={optionStatus}
                        onChange={setOrderStatus}
                        styles={customStyles}
                    />

                    <button className="--submitbuton" type="submit">
                        Submit
                </button>
                </form>

            ) : (<div>no anda</div>)}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.adminReducers.orders,
    }
}




export default connect(mapStateToProps, { putCategoryById })(EditOrders);

