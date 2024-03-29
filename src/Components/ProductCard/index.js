import React, { useState } from "react";

import { product_img } from './../../Assets/product-img-01.png'
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faUser,
    faHeart,
    faBars,
    faEllipsisV,
    faSignOut,
    faHeartCircleBolt,
} from "@fortawesome/free-solid-svg-icons";
import 'react-toastify/dist/ReactToastify.css';
import './style.css'


export function Cards(props) {
    const LogoutData = localStorage.getItem('login');

    //     const [wishlish, setwishlist] = useState(false)
    // console.log("LogoutDatatoken" , LogoutData )
    //     if (LogoutData) {
    //         setwishlist(true)
    //     }
    //     else {
    //         setwishlist(false)
    //     }
    return (

        <section className="product_listing_section">
            <Container>
                <div className="row py-5 align-items-center">

                    <div className="col-sm-6 col-lg-5 mb-3 mx-auto">

                        <div className="product_img position-relative">
                            
                            {LogoutData && (
                                <span onClick={props?.wishClick} className={props?.status === true ? "wishlist text-primary" : "wishlist text-secondary"} id="heart_icon_span">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                            )}
                            <img src={props.img} className="w-100" alt="" />
                        </div>

                    </div>

                    <div className="col-sm-12 col-lg-7 align-self-center">

                        <div className="product_content">

                            <h2 className="product_heading">{props.heading}</h2>

                            <p className="product_para">
                                {props.descripction}
                            </p>

                            <p className="product_para">
                                {props.descripction2}
                            </p>
                        </div>

                        <div className="product_btns">

                            {/* <CustomButton className="product_add_to_cart_btn"
                                props={props.text}
                            /> */}
                            <span className="product_price_btn">${props.price}</span>
                            <button className="product_add_to_cart_btn p-0 " onClick={props?.onClick}>{props?.text}</button>
                            {/* <Link  className="product_add_to_cart_btn"  to={props?.to}  >{props?.viewtext}</Link> */}
                        </div>

                    </div>
                </div>

            </Container>
            {/* <ToastContainer /> */}
        </section>
        // <div>Hello</div>
    )
}
