import {Request, Response } from 'express';
import Reserva from '../models/Reserva';

class ReservaController { 
    async create (req:Request, res:Response): Promise<void> {
        try {
            const {nomeCliente, numeroMesa, dataHora, status, contatoCliente} = req.body;
            const reservas = {nomeCliente, numeroMesa, dataHora, status, contatoCliente}
            const createdReserva = await Reserva.create(reservas);
            res.status(201).json(createdReserva);
            console.log('Reserva feita com sucesso:', createdReserva);
        } catch (err) {
            res.status(400).json({ message: 'Erro ao criar reserva.', error: err });
        }
    }

    async list (req:Request, res:Response): Promise<void> {
        try {
            const reservas = await Reserva.find();
            res.status(200).json(reservas);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar reservas.', error: err });
        }
    }

    async listCliente (req:Request, res:Response): Promise<void> {  
        try{
            const { nomeCliente } = req.params;
            const reserva = await Reserva.find({ nomeCliente: nomeCliente });

            if (!reserva){
                res.status(404).json({ message: 'Reserva não encontrada.' });   
                return;
            }

            res.status(200).json(reserva);  
            console.log('Reserva encontrada:', reserva);
        } catch (err) { 
            res.status(500).json({ message: 'Erro ao buscar reserva.', error: err });
        }
    }
    
    async listMesa (req:Request, res:Response): Promise<void> {
        try {
            const { numeroMesa } = req.params;
            const reserva = await Reserva.find({ numeroMesa: numeroMesa });

            if (!reserva) {
                res.status(404).json({ message: 'Reserva pela não encontrada.' });
                return;
            }

            res.status(200).json(reserva);
            console.log('Reserva pela Mesa encontrada:', reserva);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar reserva.', error: err });
        }
    }

    async update (req:Request, res:Response): Promise<void> {
        try {
            const { id } = req.params;
            const updatedReserva = await Reserva.findByIdAndUpdate(id, req.body, { new: true });    
            if (!updatedReserva) {
                res.status(404).json({ message: 'Reserva não encontrada.' });
                return;
            }
            res.status(200).json(updatedReserva);
            console.log('Reserva atualizada com sucesso:', updatedReserva);
        } catch (err) {
            res.status(400).json({ message: 'Erro ao atualizar reserva.', error: err });
        }
    }

    async delete (req:Request, res:Response): Promise<void> {           
        try {
            const { id } = req.params;
            const deletedReserva = await Reserva.findByIdAndDelete(id);
            if (!deletedReserva) {
                res.status(404).json({ message: 'Reserva não encontrada.' });
                return;
            }
            res.status(200).json({ message: 'Reserva removida com sucesso!' });
            console.log('Reserva removida com sucesso:', deletedReserva);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao remover reserva.', error: err });
        }
    }       
}
export default new ReservaController();

