import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper'
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from "@mui/material/TableRow";
import React, {useState,useEffect} from 'react';

//https://mui.com/material-ui/react-table/ 가면 여러가지 샘플 참고 가능
function App() {
  const [customers, setCustomers] = useState('');

  useEffect (() => {
    callApi().then(
      res => {setCustomers(res);}
    ).catch(err => console.log(err));
  }); //mount, update 모두 호출

  return (
    <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>CustomerProfile</TableCell>
          <TableCell>CustomerInfo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      { customers ?
        customers.map((customer) => {
          return <Customer customer={customer}/>;
        }) : "Now loading...."
      }
      </TableBody>
    </Table>
    </Paper>
  );
}

async function callApi() {  //비동기호출
  const response = await fetch('/api/customers'); //접속 API
  const body = await response.json();
  return body;
}

export default App;
