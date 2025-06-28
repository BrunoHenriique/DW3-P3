import express from 'express';
import mongoose from 'mongoose';
import router from './routes/reservas';import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/reserva')
  .then(() => console.log('MongoDB conectado com sucesso!'))
  .catch(err => console.error('Erro ao tentar conectar com MongoDB', err));

app.use('/reservas', router);

app.listen(PORT, () => console.log('Servidor rodando em http://localhost:3000m'));