import Cursos from '../models/cursos.js'

export const getCurso = async (req, res) => {
  try {
    const curso = await Cursos.findAll()
    res.send(curso)
  } catch (err) {
    console.log(err)
  }
}

export const getCursoById = async (req, res) => {
  try {
    const curso = await Cursos.findByPk(req.params.id)

    if (!curso) {
      res.status(404).send({
        message: `Curso con la id ${req.params.id} no encontrado`,
      })
    }

    res.send(curso)
  } catch (err) {
    console.log(err)
  }
}

export const createCurso = async (req, res) => {
  try {
    await Cursos.create(req.body)
    res.json({
      mesage: 'Curso Creado',
    })
  } catch (err) {
    console.log(err)
  }
}

export const updateCurso = async (req, res) => {
  try {
    const curso = await Cursos.findByPk(req.params.id)

    if (!curso) {
      res.status(404).send({
        message: `Curso con la id ${req.params.id} no encontrado`,
      })
      return
    }

    await Cursos.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    res.json({
      message: 'Curso actualizado',
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteCurso = async (req, res) => {
  try {
    const curso = await Cursos.findByPk(req.params.id)

    if(!curso){
      res.status(404).send({
        message: `Curso con la id ${req.params.id} no encontrado`
      })

      return
    }

    await Cursos.destroy({
      where: {
        id: req.params.id
      }
    })

    res.json({
      message: 'Curso eliminado'
    })
  } catch (err) {
    console.log(err)
  }
}