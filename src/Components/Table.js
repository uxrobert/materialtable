import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Form from './Form'
const axios = require('axios');

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TheTable(props) {
  const classes = useStyles();

const [state, setstate] = useState([null]);


 const getData = (e) =>{

   
  // Make a request for a user with a given ID
  axios.get('http://localhost:5000/users')
    .then( (response) =>{
      // handle success con
     
       setstate({data:response.data.data})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
   
    


 }

  return (
    <TableContainer component={Paper}>

    {console.log(state.data)}
     <button onClick={getData}>Get Data</button>
    {state.data===undefined?<div>loading ...</div>:  <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Favorite Dish&nbsp;</TableCell>
            <TableCell align="right">Favorite Game&nbsp;</TableCell>
          
            
          </TableRow>
        </TableHead>
        <TableBody>
          {
          state.data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.favoritedish}</TableCell>
              <TableCell align="right">{row.favoritegame}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    }
    </TableContainer>
  );
}
