import mongoose from 'mongoose';

const barrioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: Number, required: true },
  coordenadas: {
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true },
  },
});

const Barrio = mongoose.models.Barrio || mongoose.model('Barrio', barrioSchema);

export default Barrio;
