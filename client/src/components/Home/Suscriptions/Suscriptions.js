import React from 'react';
import './suscriptions.scss'

//IMAGES
import RatImg from './images/Rat.svg'
import MonkeyImg from './images/Monkey.svg'
import TigerImg from './images/Tiger.svg'
import LionImg from './images/lion.png'
const Suscriptions = ()=>{
    return (
        <>
        <h2 className="--suscriptions-main-h2">
            Suscriptions Section
        </h2>
        <div className="--suscriptions-main">
            <div className="--suscriptions-main--col">
                <h3>Rat Suscription</h3>
                <img width="150px" height="150px" alt="" src={RatImg}></img>
                <ul>
                    <li>Free</li>
                    <li>Up to 10 tracks</li>
                    <li>Upload Track Stems</li>
                    <li>Instant Payments</li>
                    <li>Accept PayPal payments</li>
                    <li>Accept Stripe payments</li>
                   
                </ul>
                <button className="--suscription--button btn-fix">Suscribe</button>
            </div>
            <div className="--suscriptions-main--col">
                <h3>Monkey Suscription</h3>
                <img width="150px" height="150px" alt="" src={MonkeyImg}></img>
                <ul>
                    <li>All free features </li>
                    <li>plus feactures:</li>
                    <li>Unlimited tracks</li>
                    <li>20 Monthly Private Messages</li>
                    <li>Sell Sound Kits</li>
                    <li>Sell Custom Services</li>
                </ul>
                <button className="--suscription--button">Suscribe</button>
            </div>
            <div className="--suscriptions-main--col">
                <h3>Cougar Suscription</h3>
                <img width="150px" height="150px" alt="" src={TigerImg}></img>
                <ul>
                    <li>All Monkey features</li>
                    <li>100% of Revenue to Seller</li>
                    <li>Unlimited  Private Messages</li>
                    <li>Unlimited Number of License</li>
                    <li>2 Submissions per Opportunity</li> 
                    <li>Sell Custom Services</li>
                </ul>
                <button className="--suscription--button">Suscribe</button>
            </div>
            <div className="--suscriptions-main--col">
                <h3>Lion Suscription</h3>
                <img width="150px" height="150px" alt="" src={LionImg}></img>
                <ul>
                    <li>All Monkey features</li>
                    <li>100% of Revenue to Seller</li>
                    <li>Unlimited  Private Messages</li>
                    <li>Unlimited Number of License</li>
                    <li>2 Submissions per Opportunity</li> 
                    <li>Sell Custom Services</li>
                </ul>
                <button className="--suscription--button">Suscribe</button>
            </div>
        </div>
        </>
    )
};

export default Suscriptions;