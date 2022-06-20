import React from "react";
import "./styles.css";

const d = new Date();
let year = d.getFullYear();

function Footer() {
    return(
        <div className="footer">
            <p> copyright hi @ {year} </p>
        </div>
    )
}

export default Footer;