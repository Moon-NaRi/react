import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper'
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from "@mui/material/TableRow";

const customers = [
  {
    "id": 1,
    "image": 'https://placeimg.com/64/64/1',
    "name": '문나리',
    "birthday": '981028',
    "gender": '여자',
    "job": '학생',
  },
  {
    "id": 2,
    "image": 'https://placeimg.com/64/64/2',
    "name": '김유진',
    "birthday": '981028',
    "gender": '여자',
    "job": '백수',
  },
  {
    "id": 3,
    "image": 'https://placeimg.com/64/64/3',
    "name": '박샐리',
    "birthday": '981028',
    "gender": '여자',
    "job": '직장인',
  }
]

//https://mui.com/material-ui/react-table/ 가면 여러가지 샘플 참고 가능
function App() {
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
      {
        customers.map((customer) => {
          return <Customer customer={customer}/>;
        })
      }
      </TableBody>
    </Table>
    </Paper>
  );
}

export default App;
