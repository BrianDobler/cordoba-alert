// src/app/api/barrios/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '../../lib/dbConnect';
import Barrio from '../../models/Barrio';

/*
const barrioSimulado = {
  _id: "66f7e0c666eaf2b2acd23333", 
  nombre: "Argüello Lourdes",
  codigo: 6,
  coordenadas: {
    latitud: -31.345112,
    longitud: -64.260001
  }
};
*/

export async function GET() {
  try {
    await dbConnect();
    console.log('Conexión a la base de datos exitosa');

    const barrios = await Barrio.find({});
    console.log('Barrios encontrados:', barrios); 

    return NextResponse.json(barrios);
  } catch (error) {
    console.error('Error fetching barrios:', error);
    return NextResponse.json({ error: 'Error al obtener los barrios' }, { status: 500 });
  }
}
