import React from "react";
import "../../../../../CoffeeShop-main/src/components/Banner/Banner.css";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({link}) => {
    return (
        <section className="container">
            <div className="container-content">
                <h1 className="container-title">
                    Everything You Love About Coffee
                </h1>
                <img src={"Beans-logo.svg"} alt="logo"/>
                <h2 className="container-sub-title">Facem fiecare zi plină de energie și gust</h2>
                <h2 className="container-sub-title">Vrei să încerci boabele noastră?</h2>
                <NavLink to={link}>
                    <button className="more-btn btn-pos">
                        More
                    </button>
                </NavLink>
            </div>
        </section>
    );
};

Banner.propTypes = {
    link: PropTypes.string
};

export default Banner;