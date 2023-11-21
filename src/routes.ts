import {Router} from 'express';
import AtividadeController from './app/controllers/AtividadeController';
import DiarioController from './app/controllers/DiarioGeralController';
import ProfissionalController from './app/controllers/ProfissionalController';
import PacienteController from './app/controllers/PacienteController';


const router = Router();
//Criando rotas para /Diario
//http://localhost:3000/Diario/list
router.get('/diariogeral/list', DiarioController.list);
router.post('/diariogeral/store', DiarioController.store);
router.delete('/diariogeral/delete', DiarioController.delete);

//Criando rotas para /atividade
//http://localhost:3000/Local/list
router.get('/atividade/list', AtividadeController.list);
router.post('/atividade/store', AtividadeController.store);
router.delete('/atividade/delete', AtividadeController.delete);

//localhost:3000/Paciente/
router.get('/paciente/list', PacienteController.list);
router.post('/paciente/store', PacienteController.store);
router.delete('/paciente/delete', PacienteController.delete);

router.post('/loginpaciente', PacienteController.login);
router.get('/paciente/: cpf', PacienteController.find); //o find encontra/recuperar elementos


//localhost:3000/Profissional/
router.get('/profissional/list', ProfissionalController.list);
router.post('/profissional/store', ProfissionalController.store);
router.delete('/profissional/delete', ProfissionalController.delete);

router.post('/loginprofissional', ProfissionalController.login);
router.get('/profissional/: cpf', ProfissionalController.find);


export default router;