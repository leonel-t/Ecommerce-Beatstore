import React, {useState} from "react";
import {connect} from "react-redux";
import { withTranslation } from 'react-i18next';
import './subscriptions-form.scss';
import {serverUrl} from '../../auxiliar/variables';
import { useForm } from "react-hook-form";
import RAT from './images/Rat.svg';
import MONKEY from './images/Monkey.svg';
import TIGER from './images/Tiger.svg';
import LION from './images/lion.png';
import swal from "sweetalert";
import axios from "axios";
import LOADDING from "../../assets/images/Spin-1s-200px.svg";
import {useHistory} from "react-router-dom";

const SubscriptionsForm = ({t, STORE_USER, subscription}) => {
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
   image: userStore && userStore.image ? userStore.image : "default.jpg",
   name: userStore && userStore.name ? userStore.name : "No Name",
 };
 //#############################################################################

   // HOOK useForm ###############################################################################
   const { register, handleSubmit, formState: { errors } } = useForm();
   const [postLoading, setPostLoading] = useState(false);
   const [formStep, setFormStep] = useState("one");
   
   // FUNCTION  onSubmit #########################################################################
   const onSubmit = (data) => {
 
     let customer = {
       email: data.customerEmail,
       phone: data.customerPhone,
       address: data.customerAdress,
       subscription: data.customerSubscription,
       comment:data.customerComment
     };
 
      return postCustomer(customer);
   };

   const onSubmitPayment = (data) => {
 
    let amount = {
      amount: 10,
    };

     return postPaimentIntents(amount);
  };
 
   // FUNCTION postCustomer ####################################################################
   const postCustomer = async (customer)=>{
 
       setPostLoading(true);
 
       const options = {
         method: 'POST',
         url: `${serverUrl}/customers/create`,
         headers: {
           'Content-Type': 'application/json',
           'token': localStorage.getItem("token")
         },
         data: {
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            subscription_mode: customer.subscription,
            comment: customer.comment
             }
       };
 
      return await axios.request(options).then(response => {
         
         setTimeout(()=>{
           return setPostLoading(false);
         },1000);
 
         setFormStep("two")
         swal(`Add Customer Successful`);
        
        console.log(response)
 
       }).catch(error => {
         swal(`${error}`);
       });
   };

      // FUNCTION postPaymentAmount ####################################################################
      const postPaimentIntents = async (amount)=>{
      
        setPostLoading(true);
  
        const options = {
          method: 'POST',
          url: `${serverUrl}/paymentIntent/create`,
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
          },
          data: {
            amount: "10.50"
              }
        };
  
       return await axios.request(options).then(response => {
          
          setTimeout(()=>{
            return setPostLoading(false);
          },1000);

          

          swal(`Add PaymentIntents Successful`);
         
         console.log(response)
  
        }).catch(error => {
          swal(`${error}`);
        });
    };

     

  return (
    <>
    {user && user.id
        ?(
            <div className="--subscriptions--main-form">
                <div className="--subscriptions--main-form-col-1">
                    <div className="--subscriptions--main-form-col-1-img">
                        <img src={`${serverUrl}/images/${user.image}`} alt="user"></img>
                    </div>
                    <div className="--subscriptions--main-form-col-1-img">
                        <p>He! {user.name} Upgrade your subscription!</p>
                    </div>
                    <div className="--subscriptions--main-form-col-1-details">
                        <div>Current subscription : {subscription}</div>
                        <div className="--subscriptions--main-form-col-2">
                            {subscription === "rat"
                                ?(
                                    <div className="--subscriptions--main-form-col-2-img">
                                        <img src={RAT} alt="user"></img>
                                    </div>
                                ):(
                                    <>
                                        {subscription === "monkey"
                                        ?(
                                            <div className="--subscriptions--main-form-col-2-img">
                                                <img src={MONKEY} alt="user"></img>
                                            </div>
                                        ):(
                                            <>
                                                {subscription === "coguar"
                                                ?(
                                                    <div className="--subscriptions--main-form-col-2-img">
                                                        <img src={TIGER} alt="user"></img>
                                                    </div>
                                                ):(
                                                    <>
                                                    {subscription === "lion"
                                                    ?(
                                                        <div className="--subscriptions--main-form-col-2-img">
                                                            <img src={LION} alt="user"></img>
                                                        </div>
                                                    ):(
                                                        <>
            
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
                                )
                            }
                        </div>
                    </div>
                </div>
                {formStep === "one"
                    ?(
                        <div className="--subscriptions--main-form-col-3">
                        <div className="--subscriptions--main-form-col-3-title">
                            <h2>Complete the customer form </h2>
                        </div>
                        <div className="--subscriptions--main-form-col-3-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="--subscriptions--main-form-col-3-form-one">
                                    <div className="--subscriptions--main-form-col-3-form-one-col">
                                    <label>Email:</label>
                                    <input type="text"
                                    name="customerEmail"
                                    {...register("customerEmail", { required: true })}
                                    />
                                    {errors.customerEmail && <span>The Email is Required</span>}
                                    
                                    </div>
                                    <div  className="--subscriptions--main-form-col-3-form-one-col">
                                        <label>Phone:</label>
                                        <input type="text"
                                         name="customerPhone"
                                         {...register("customerPhone", { required: true })}
                                         />
                                         {errors.customerPhone && <span>The Phone is Required</span>}
                                    </div>
                                    <div  className="--subscriptions--main-form-col-3-form-one-col">
                                        <label>Address:</label>
                                        <input type="text" 
                                        name="customerAdress"
                                         {...register("customerAdress", { required: true })}
                                         />
                                         {errors.customerAdress && <span>The Adress is Required</span>}
                                    </div>
                                    <div  className="--subscriptions--main-form-col-3-form-one-col">
                                        <label>Subscription Mode:</label>
                                        <input type="text" name="customerSubscription"
                                         {...register("customerSubscription", { required: true })}
                                         />
                                         {errors.customerSubscription && <span>The Adress is Required</span>}
                                    </div>
                                    <div  className="--subscriptions--main-form-col-3-form-one-col">
                                        <label>Comment:</label>
                                        <input type="text" name="customerComment"
                                         {...register("customerComment", { required: false })}
                                         />
                                    </div>
                                    <div  className="--subscriptions--main-form-col-3-form-one-col">
                                        <button type="submit">
                                            {postLoading
                                                ?(
                                                    <img width="50px" height="50px" src={LOADDING} alt="loadding"/>
                                                ):(
                                                    "Upgrade Subscription"
                                                )
                                            }
                                            </button>
                                    </div>
                                    </div>
                                </form>
                        </div>  
                    </div>
                    ):(
                        <>
                        {formStep === "two"
                            ?(
                                <div className="--subscriptions--main-form-col-3">
                        <div className="--subscriptions--main-form-col-3-title">
                            <h2>Comfirm amount to pay </h2>
                        </div>
                        <div className="--subscriptions--main-form-col-3-form">
                                <form onSubmit={handleSubmit(onSubmitPayment)}>
                                    <div className="--subscriptions--main-form-col-3-form-one-col">
                                        <label>Amount:</label>
                                        <input type="text"
                                         name="paymentIntents"
                                         value="10"
                                         disabled
                                         {...register("paymentIntents", { required: false })}
                                         />
                                         {errors.paymentIntents && <span>The payment method is Required</span>}
                                    </div>
                                    <div className="--subscriptions--main-form-col-3-form-one-col">
                                        <button type="submit">
                                            {postLoading
                                                ?(
                                                    <img width="50px" height="50px" src={LOADDING} alt="loadding"/>
                                                ):(
                                                    "Confirm"
                                                )
                                            }
                                            </button>
                                    </div>
                                    
                                </form>
                        </div>  
                    </div>
                            ):(
                                <p>Step 3</p>
                            )
                        }
                        </>
                    )
                }
            </div>
        ):(
            <>
                <div>
                    <p> register an account to continue </p>
                    <button
                    onClick={handleClick}
                    >Register an account</button>
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SubscriptionsForm));