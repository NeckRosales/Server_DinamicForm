import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://acernas1:aW4BSFluT0FxnviX@cluster0.yuxjmzz.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log('Conexion a la base de datos con exito')
  } catch (error) {
    console.error(error)
  }
}
