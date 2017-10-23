import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
//import * as Blueprint from "@blueprintjs/core";

export const Header = (props) => {
    console.log("Indside header.js");
    const menu = (
        <div className="pt-navbar">
            <nav className="container-wrapper modifier">
                <div className="pt-navbar-group pt-align-left">
                    <NavLink to="/" activeClassName="active" > Home</NavLink>                   
                        <span className="pt-navbar-divider"></span>
                    <NavLink to="/user" activeClassName="active">user</NavLink>                    
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                    <button className="pt-button pt-minimal pt-icon-notifications"></button>
                    <button className="pt-button pt-minimal pt-icon-cog"></button>
                </div>
            </nav>        
        </div>
       
    );
    return (
        <header className="header">                  
            {menu}            
        </header>
    );
};
/*
export class Header extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render(){
        console.log("Indside header.js");
        const menu = (
            <Menu>
                <MenuItem text="New" />
                <MenuItem text="Open" />
                <MenuItem text="Save" />
            </Menu>
        );

        return(  
            <header className="header">      
                <div className="container-wrapper">
                    {menu}
                </div>
            </header>
        );
    }
}

*/