import React from "react";
import "./style.css";
import API from "../../utils/API";

class Ads extends React.Component() {
    render(){
    return (
        <div class="sidebar-widget advertise-space">
            <div class="overlay"></div>
            <div class="content">
                <h2>Advertise Here</h2>
                <i class="icofont icofont-ui-call main"></i>
                <h3>+111 - 222 - 123456</h3>
                <p><i class="icofont icofont-envelope"></i>support@email.com</p>
            </div>
        </div>
    );
    }
}

export default Ads;