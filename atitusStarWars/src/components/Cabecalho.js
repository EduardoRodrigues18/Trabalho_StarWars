import React, { useContext } from 'react';
import { ContadorContext } from '../services/Contador';

export default function Cabecalho() {
    const { contador } = useContext(ContadorContext);
    return (
        <div className='cabecalho'>
            <h1 style={{ color: "white", fontSize: 80 }}>ATITUS STAR WARS</h1>
            <span className="contador">Contador: {contador}</span>
        </div>
    )
}
