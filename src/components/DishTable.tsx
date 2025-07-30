import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Dish from '../interface/Dish';

export default function DishTable( { data } : { data: Dish[] } ) {

  let [rows, setRows] = useState(Array<Dish>)

  let getRows = () => {
    if (rows.length) {
      return (
        rows.slice(0,10).map((row) => (
          <TableRow
            key={row.position}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.position}
            </TableCell>
            <TableCell align="right">{row.title} ({row.subtitle})</TableCell>
            <TableCell align="center">{row.country}</TableCell>
            <TableCell align="center">{row.rating}</TableCell>
            <TableCell align="center">{row.iconic }</TableCell>
            <TableCell align="center">{row.ingredients}</TableCell>
            
            {/* PENDIENTE: Valores a renderizar en cada celda  */}


            
          </TableRow>
        ))
      )
    } else {
      return <TableRow><TableCell>No data</TableCell></TableRow>
    }
      
  }

  useEffect( ()=> {
    setRows(data)
  }, [data])
  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Puesto</TableCell>
            <TableCell align='center'>Plato</TableCell>
            <TableCell align='center'>Pais</TableCell>
            <TableCell align='center'>Rating</TableCell>
            <TableCell align='center'>Restaurante Iconico</TableCell>
            <TableCell align='center'>Ingrediente</TableCell>

            
            {/* PENDIENTE: Cabeceras de las columnas  */}

          </TableRow>
        </TableHead>
        <TableBody>
          {getRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
