import React from "react";

export const Footer = (props) => {
        return(
            <footer>
                <div className="container-wrapper">
                    <p>{props.FooterDesc} </p>
                </div>
            </footer>
        );
};