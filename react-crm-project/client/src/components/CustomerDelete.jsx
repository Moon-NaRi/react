import React from "react";

function CustomerDelete (props) {
    const {id} = props;
    const url = '/api/customers/' + id;

    const deleteCustomer = (event) => {
        fetch(url, {
            method: 'DELETE'
        });
        window.location.reload();
    };

    return (
        <button onClick={deleteCustomer}>삭제</button>
    );
}

export default CustomerDelete;