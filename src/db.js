import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/dynamicForm')
    console.log('Conexion a la base de datos con exito')
  } catch (error) {
    console.error(error)
  }
}
