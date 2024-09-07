import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom';


//MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { useState, useEffect } from 'react'


const Home = () => {
  const [conta, setConta] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('')
  const [contas, setContas] = useState(() => {
    const savedContas = localStorage.getItem('contas');
    return savedContas ? JSON.parse(savedContas) : [];
  });
  

  const history = useNavigate()

  useEffect(() => {
    localStorage.setItem('contas', JSON.stringify(contas));
  }, [contas]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dados = {
      conta,
      valor,
      tipo,      
    };

    setContas([...contas, dados]);  

    //limpar inputs
    setConta('')
    setValor('')

    console.log(dados)

  };

  const faturas = () => {
    if(tipo === 'despesa') {
      history('/pagamento', { state: { contas } });
    } else if (tipo === 'receita'){ 
      history('/recebimento', { state: { contas } });
    }
  }

  return (

    <div className={styles.contas}>
      <p>Contas</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome do titulo</span>
          <TextField
            type="text"
            name='conta'
            required
            placeholder='Informe a conta'
            value={conta}
            onChange={(e) => setConta(e.target.value)} />
        </label>
        <label>
          <span>Valor</span>
          <TextField
            type="number"
            name='valor'
            required
            placeholder='Informe o valor'
            value={valor}
            onChange={(e) => setValor(e.target.value)} />
        </label>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setTipo(e.target.value)}>
            <FormControlLabel value="despesa" control={<Radio />} label="Despesa" />
            <FormControlLabel value="receita" control={<Radio />} label="Receita" />
          </RadioGroup>
          <Button variant="contained" type='submit'>Lançar</Button>
        </FormControl>
      </form>
      <Button variant="contained" onClick={faturas} style={{ marginTop: '10px' }}>
        Ver Contas
      </Button>


    </div>
  )
}

export default Home
