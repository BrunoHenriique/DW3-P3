import express from 'express';
import mongoose from 'mongoose';
import router from './routes/reservas';



const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/reserva')
  .then(() => console.log('MongoDB conectado com sucesso!'))
  .catch(err => console.error('Erro ao tentar conectar com MongoDB', err));

app.use('/reservas', router);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));