import EduardoImage from '../assets/images/Eduardo.jpg';
import RianImage from '../assets/images/Rian.jpg';
import { LinkedIn, GitHub } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import starWarsApi from '../services/starWarsApi';
import { Grid, IconButton } from '@mui/material'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { Avatar } from '@mui/material';

const Sobre = () => {
    return (
        <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <MenuOpcoes />
                    <div className='corpo'>
                        <div className="sobre">
                            <Avatar
                                sx={{ width: 150, height: 150, objectPosition: 'top' }}
                                style={{ objectPosition: 'top' }}
                                alt="Remy Sharp"
                                src={EduardoImage}
                            />
                            <h1>Eduardo Rodrigues</h1>
                            <div className="link-group">
                                <a
                                    href="https://www.linkedin.com/in/eduardo-rodrigues-dos-santos-7b7240208/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <LinkedIn />
                                </a>
                                <a
                                    href="https://github.com/EduardoRodrigues18"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GitHub />
                                </a>
                            </div>
                        </div>
                        <div className="sobre">
                            <Avatar
                                sx={{ width: 150, height: 150, objectPosition: 'top' }}
                                style={{ objectPosition: 'top' }}
                                alt="Remy Sharp"
                                src={RianImage}
                            />
                            <h1>Rian Ressai</h1>
                            <div className="link-group">
                                <a
                                    href="https://www.linkedin.com/in/fabricio-mesomo/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <LinkedIn />
                                </a>
                                <a
                                    href="https://github.com/mesomo-fabricio"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GitHub />
                                </a>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>
    );
};

export default Sobre;
