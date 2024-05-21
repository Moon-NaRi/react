import React from "react";
import CustomerProfile from "./CustomerProfile";
// import styled from "styled-components";
import CustomerInfo from "./CustomerInfo";
import TableCell from '@mui/material/TableCell';
import TableRow from "@mui/material/TableRow";

function Customer (props) {
    const {customer} = props;
    return (
        <TableRow>
            <TableCell>
            <CustomerProfile
            image={customer.image}
            name={customer.name}
            id={customer.id}/>
            </TableCell>
            <TableCell>
            <CustomerInfo
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
            />
            </TableCell>
        </TableRow>
    );
}

export default Customer;