import styles from "./Pagamento.module.css"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { useLocation } from "react-router-dom"

const Pagamento = () => {

  const location = useLocation()
  const { contas } = location.state || { contas: [] };

  return (
    <div className={styles.card_pagamento}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: '#00FF7F',
          border: '3px solid black',
        }}
      >
        <CardActionArea className={styles.CardActionArea}>
          <CardContent>
            {contas.map((item, index) => (
              <ul className={styles.no_bullets}>
                <h1 key={index}><span>{item.conta}</span></h1>
                <li key={index}><span>R$: {item.valor}</span></li>  
              </ul>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Pagamento
