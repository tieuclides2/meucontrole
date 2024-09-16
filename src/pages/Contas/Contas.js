import styles from './Contas.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import { CardActionArea } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Contas = () => {
  const location = useLocation();
  const [contas, setContas] = useState(location.state?.contas || []);

  // Função para lidar com a mudança do checkbox
  const handleCheckboxChange = (index) => {
    // Atualizar o estado da conta paga
    const updatedContas = contas.map((item, idx) => {
      if (idx === index) {
        return { ...item, paga: !item.paga };
      }
      return item;
    });
    setContas(updatedContas);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contas</h1>
      <div className={styles.flexContainer}>
        {/* Contêiner para Despesas */}
        <div className={styles.despesasContainer}>
          <h2>Despesas</h2>
          {contas
            .filter(item => item.tipo === 'despesa')
            .map((item, index) => (
              <Card
                className={styles.card}
                key={index}
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#FF6347',
                  border: '3px solid black',
                  marginBottom: '20px',
                  opacity: item.paga ? 0.6 : 1
                }}
              >
                <CardActionArea>
                  <CardHeader
                    title="Despesa"
                    titleTypographyProps={{ variant: 'h6', align: 'center' }}
                    style={{ backgroundColor: '#FF4500', color: 'white' }}
                  />
                  <CardContent>
                    <h2><span>{item.conta}</span></h2>
                    <p><span>R$: {item.valor}</span></p>
                    <Checkbox
                      checked={item.paga}
                      onChange={() => handleCheckboxChange(index)}
                      color="primary"
                      inputProps={{ 'aria-label': 'Marcar como paga' }}
                    />
                    <span>Marcar como paga</span>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </div>

        {/* Contêiner para Receitas */}
        <div className={styles.receitasContainer}>
          <h2>Receitas</h2>
          {contas
            .filter(item => item.tipo === 'receita')
            .map((item, index) => (
              <Card
                className={styles.card}
                key={index}
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#00FF7F',
                  border: '3px solid black',
                  marginBottom: '20px',
                  opacity: item.paga ? 0.6 : 1
                }}
              >
                <CardActionArea>
                  <CardHeader
                    title="Receita"
                    titleTypographyProps={{ variant: 'h6', align: 'center' }}
                    style={{ backgroundColor: '#32CD32', color: 'white' }}
                  />
                  <CardContent>
                    <h2><span>{item.conta}</span></h2>
                    <p><span>R$: {item.valor}</span></p>
                    <Checkbox
                      checked={item.paga}
                      onChange={() => handleCheckboxChange(index)}
                      color="primary"
                      inputProps={{ 'aria-label': 'Marcar como paga' }}
                    />
                    <span>Marcar como paga</span>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contas;
