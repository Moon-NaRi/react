import React from "react";

function CustomerProfile (props) {
    const {image, name, id} = props;
    return(
        <div>
            <img src={image} alt="profile"/>
            <h2>{name}{`  id: ${id}`}</h2>
        </div>
    );
}

export default CustomerProfile;