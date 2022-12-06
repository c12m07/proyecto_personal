import Express from 'express';
import {
  getCurso,
  getCursoById,
  createCurso,
  updateCurso,
  deleteCurso
} from '../controllers/Cursos.js'

const Router = Express.Router()

Router.get('/cursos', getCurso)

Router.get('/cursos/:id', getCursoById)

Router.post('/cursos', createCurso)

Router.put('/cursos/:id', updateCurso)

Router.delete('/cursos/:id', deleteCurso )

export default Router