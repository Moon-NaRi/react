import React from "react";
import CustomerDelete from "./CustomerDelete";

function CustomerProfile (props) {
    const {image, name, id} = props;
    return(
        <div>
            <img src={image} alt="profile"/>
            <h2>{name}{`  id: ${id}`}</h2>
            <CustomerDelete id={id}/>
        </div>
    );
}

export default CustomerProfile;