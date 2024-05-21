import React from "react";

function CustomerInfo (props) {
    const {birthday, gender, job} = props;
    return (
        <div>
            <p>{`birthday: ${birthday}`}</p>
            <p>{`gender: ${gender}`}</p>
            <p>{`job: ${job}`}</p>
        </div>
    );
}

export default CustomerInfo;