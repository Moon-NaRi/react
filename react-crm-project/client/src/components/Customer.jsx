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
            image={customer.IMAGE}
            name={customer.NAME}
            id={customer.ID}/>
            </TableCell>
            <TableCell>
            <CustomerInfo
                birthday={customer.BIRTHDAY}
                gender={customer.GENDER}
                job={customer.JOB}
            />
            </TableCell>
        </TableRow>
    );
}

export default Customer;