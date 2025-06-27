import {Router} from 'express';
import reservas from '../controllers/reservaController';  

const router = Router();  

router.post('/', reservas.create);
router.get('/', reservas.list); 
router.get('/cliente/:nomeCliente', reservas.listCliente);
router.get('/mesa/:numeroMesa', reservas.listMesa);
router.put('/:id', reservas.update);
router.delete('/:id', reservas.delete);

export default router;
