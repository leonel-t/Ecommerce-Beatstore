import React from "react";
import {connect} from "react-redux";
import { withTranslation } from 'react-i18next';
import SubscriptionsForm from "./SubscriptionsForm";
import {useHistory} from "react-router-dom";
import "./subscriptions-form.scss";
const SubscriptionsUser = ({t, STORE_USER}) => {
    const history = useHistory();
    const handleClick = ()=>{
        history.push("/register")
    }
   //USER IDENTIFICATION FOR REDUCER #############################################
   let userStore =
   STORE_USER.user && STORE_USER.user.data && STORE_USER.user.data.user
     ? STORE_USER.user.data.user
     : null;
 let user = {
   userStatus: userStore ? true : false,
   id: userStore && userStore.id ? userStore.id : 0,
   orderId: STORE_USER.cartDetaills.id ? STORE_USER.cartDetaills.id : 0,
   rol: userStore && userStore.rol ? userStore.rol : 0,
   subscription: userStore && userStore.subscription ? userStore.subscription : " ",
 };
 //#############################################################################

  return (
    <>
    {user && user.subscription === "rat"
        ?(
            <main className="--subscriptions--main">
                <SubscriptionsForm subscription="rat"/>
            </main>
        ):(
          <>
            {user && user.subscription === "monkey"
                ?(
                    <main className="--subscriptions--main">
                         <SubscriptionsForm subscription="monkey"/>
                    </main>
                ):(
                    <>
                    {user && user.subscription === "cougar"
                        ?(
                            <main className="--subscriptions--main">
                                <SubscriptionsForm subscription="cougar"/>
                            </main>
                        ):(
                            <>
                                {user && user.subscription === "lion"
                                    ?(
                                        <main className="--subscriptions--main">
                                            <SubscriptionsForm subscription="lion"/>
                                        </main>
                                    ):(
                                        <div className="gotoregister">
                                        <p> register an account to continue </p>
                                            <button
                                            onClick={handleClick}
                                            >Register an account</button>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                    </>
                )
            }
        </>
      )
    }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    STORE_USER: state.userReducers
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      //fetchUserInBoxEffect: (idUser) => dispatch(fetchUserInBox(idUser)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SubscriptionsUser));