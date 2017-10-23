import React from "react";
//import * as Blueprint from "@blueprintjs/core";
import {
    Menu,
    MenuItem,
    MenuDivider
} from "@blueprintjs/core";

export const Header = (props) => {
    console.log("Indside header.js");
    const menu = (
        <Menu>
            <MenuItem text="New" />
            <MenuItem text="Open" />
            <MenuItem text="Save" />
        </Menu>
    );
    return (
        <header className="header">      
            <div className="container-wrapper">
                {menu}
            </div>
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