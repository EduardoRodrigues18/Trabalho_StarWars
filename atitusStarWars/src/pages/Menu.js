import { Grid, IconButton } from '@mui/material'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { getDuvidas } from '../services/BancoService';


export default function Menu(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDuvidas = async () => {
      const result = await getDuvidas();
      setData([...result]);
    };

    fetchDuvidas();
  }, []);

  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <MenuOpcoes />
          <div className='corpo'>
            <div className="home">
              <h1>Dúvidas</h1>
              <ul className="question-list">
                {data?.map((question) => (
                  <li key={question.id}>{question.question}</li>
                ))}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>

  )
}
