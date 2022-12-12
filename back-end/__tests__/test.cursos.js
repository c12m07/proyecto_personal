import request from 'supertest'
import chai from 'chai'
import app from '../app.js'
import Cursos from '../models/cursos.js'
import { before } from 'mocha'

const { expect } = chai

describe('Testeo de cursos', () => {
  
  let curso1
  let curso2

  before(async () => {

    curso1 = await Cursos.create({
      imagen: 'url ejemplo',
      title: 'titulo prueba',
      description: 'este es el primer curso de prueba'
    });

    curso2 = await Cursos.create({
      imagen: 'url ejemplo',
      title: 'titulo prueba 2',
      description: 'este es el segundo curso de prueba'
    });
  });

  it('Obtener todos los cursos', async () => {

    const { body, status } = await request(app).get('/cursos')

    expect(status).to.equal(200)
    expect(body).to.be.a(`array`)
    expect(body.length).to.equal(2)
  })

  it('Retorna un curso por id', async () => {

    const { body, status } = await request(app)
      .get(`/cursos/${curso1.id}`)

    expect(status).to.equal(200)
    expect(body).to.be.a('object')

    const curso = await Cursos.findByPk(curso1.id)
    expect(curso.id).to.equal(curso1.id)
    expect(curso.title).to.equal(curso1.title)
  })

  it('Crear curso', async () => {

    const payload = {
      imagen: 'nueva imagen',
      title: 'Curso creado',
      description: 'Este es el nuevo medicamento'
    }

    const { body, status } = await request(app)
      .post('/cursos')
      .send(payload)
    
    expect(status).to.equal(200)
    expect(body).to.be.a('object')

    const curso = await Cursos.findByPk(3)
    expect(curso.id).to.equal(3)
    expect(curso.title).to.equal(payload.title)
  })

})