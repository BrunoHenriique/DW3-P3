import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
  nomeCliente: { type: String, required: true },
  numeroMesa: { type: Number, required: true },
  dataHora: { type: Date, required: true },
  status: { type: String, enum: ['reservado', 'ocupado', 'disponível'], default: 'disponivel' },
  contatoCliente: { type: String, required: true }
});

const Reserva = mongoose.model('Reserva', reservaSchema);
export default Reserva;