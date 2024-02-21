// importando el esquema Form
import Form from '../models.js'

// clase para manejar los controladores de formularios
export class FormController {
  static async createForm(req, res) {
    try {
      const { data } = req.body
      const newForm = new Form({ data })
      const savedForm = await newForm.save()
      res.status(201).json({ form: savedForm })
    } catch (error) {
      res.status(400).json({ error })
    }
  }

  static async readForm(req, res) {
    try {
      const forms = await Form.find()
      res.status(200).json({ forms })
    } catch (error) {
      res.status(400).json({ error })
    }
  }

  // static async updateForm (req, res) {}

  static async deleteForm(req, res) {
    try {
      const { id } = req.params
      await Form.findOneAndDelete({ _id: id })
      res.status(204).json({ message: 'Deleted form' })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
